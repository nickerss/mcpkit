/**
 * MCPKIT v3.0 API Worker
 * Deployed via: wrangler deploy -c wrangler-workers.toml
 *
 * API Endpoints:
 *   GET  /api/health
 *   GET  /api/tools/[slug]          — read tool with KV-cached quality score
 *   GET  /api/tools/[slug]/reviews  — paginated reviews
 *   POST /api/tools/[slug]/reviews  — submit review (Turnstile + auth)
 *   POST /api/stripe/webhook        — Stripe webhook
 *   GET  /api/dashboard/stats       — protected
 *   GET  /api/kits                  — list kits
 *   GET  /api/kits/[slug]           — single kit with tools
 *   POST /api/auth/github           — GitHub OAuth initiation
 *   GET  /api/auth/callback         — GitHub OAuth callback
 *   POST /api/auth/logout           — logout
 *   GET  /api/user                  — current user info
 *
 * Cron: Quality Score refresh daily at 00:00 UTC
 */

export interface Env {
  DB: D1Database;
  CACHE: KVNamespace;
  SITE_URL: string;
  API_URL: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  JWT_SECRET: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  TURNSTILE_SECRET_KEY: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;
    const ip = request.headers.get('CF-Connecting-IP') || '';

    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    // Health
    if (path === '/api/health') {
      return Response.json({ status: 'ok', timestamp: Date.now() });
    }

    // Auth routes
    if (path.startsWith('/api/auth/')) {
      return handleAuth(request, env);
    }

    // Stripe webhook
    if (path === '/api/stripe/webhook') {
      return handleStripeWebhook(request, env);
    }

    // Dashboard routes (all require auth)
    if (path.startsWith('/api/dashboard')) {
      return handleDashboard(request, env);
    }

    // Kits
    if (path === '/api/kits') {
      return handleKits(request, env);
    }

    // Tools & Reviews
    if (path.startsWith('/api/tools/')) {
      return handleTools(request, env, ip);
    }

    // User
    if (path === '/api/user') {
      return handleUser(request, env);
    }

    return Response.json({ error: 'Not found' }, { status: 404 });
  },

  async scheduled(controller: ScheduledController, env: Env, ctx: ExecutionContext): Promise<void> {
    await calculateAllQualityScores(env);
  },
};

// ─── Auth Handler ─────────────────────────────────────────────────────────────

async function handleAuth(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/api/auth/github') {
    const state = crypto.randomUUID();
    const redirectUri = `${env.API_URL}/api/auth/callback`;
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&scope=read:user,user:email`;
    await env.CACHE.put(`oauth_state:${state}`, 'pending', { expirationTtl: 600 });
    return Response.redirect(authUrl, 302);
  }

  if (path === '/api/auth/callback') {
    try {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    if (!code || !state) return json({ error: 'Missing code or state' }, 400);

    const storedState = await env.CACHE.get(`oauth_state:${state}`);
    if (!storedState) return json({ error: 'Invalid state' }, 400);
    await env.CACHE.delete(`oauth_state:${state}`);

    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ 
        client_id: env.GITHUB_CLIENT_ID, 
        client_secret: env.GITHUB_CLIENT_SECRET, 
        code,
        redirect_uri: `${env.API_URL}/api/auth/callback`
      }),
    });
    const tokenText = await tokenRes.text();
    let tokenData;
    try { tokenData = JSON.parse(tokenText); } catch { 
      return json({ 
        error: 'GitHub token response not JSON', 
        response: tokenText.substring(0, 500),
        status: tokenRes.status,
        clientId: env.GITHUB_CLIENT_ID ? 'set' : 'missing'
      }, 500); 
    }
    const accessToken = tokenData.access_token;
    if (!accessToken) return json({ error: 'Failed to get access token: ' + JSON.stringify(tokenData) }, 400);

    const userRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' },
    });
    const userText = await userRes.text();
    let githubUser;
    try { githubUser = JSON.parse(userText); } catch {
      return json({
        error: 'GitHub user response not JSON',
        response: userText.substring(0, 500),
        status: userRes.status
      }, 500);
    }

    const userId = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);
    await env.DB.prepare(`
      INSERT INTO users (id, github_id, name, avatar_url, email, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(github_id) DO UPDATE SET name = excluded.name, avatar_url = excluded.avatar_url, email = excluded.email
    `).bind(userId, String(githubUser.id), githubUser.login, githubUser.avatar_url, githubUser.email || '', now).run();

    const sessionToken = crypto.randomUUID();
    await env.CACHE.put(`session:${sessionToken}`, userId, { expirationTtl: 60 * 60 * 24 * 7 });

    return new Response(null, {
      status: 302,
      headers: {
        Location: `${env.SITE_URL}/dashboard/`,
        'Set-Cookie': `session=${sessionToken}; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=${60 * 60 * 24 * 7}; Domain=.mcpkit.run`,
      },
    });
    } catch (err) {
      return json({ error: String(err) }, 500);
    }
  }

  if (path === '/api/auth/logout') {
    const token = getSessionToken(request);
    if (token) await env.CACHE.delete(`session:${token}`);
    return new Response(null, {
      status: 302,
      headers: {
        Location: `${env.SITE_URL}/`,
        'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=0; Domain=.mcpkit.run',
      },
    });
  }

  return json({ error: 'Not found' }, 404);
}

// ─── Stripe Webhook ──────────────────────────────────────────────────────────

async function handleStripeWebhook(request: Request, env: Env): Promise<Response> {
  if (request.method !== 'POST') return json({ error: 'Method not allowed' }, 405);
  const payload = await request.text();
  let event: any;
  try { event = JSON.parse(payload); } catch { return json({ error: 'Invalid JSON' }, 400); }

  const now = Math.floor(Date.now() / 1000);

  if (event.type === 'checkout.session.completed') {
    const { user_id: userId, tier } = event.data.object.metadata || {};
    if (userId && tier) {
      await env.DB.prepare(`
        INSERT INTO subscriptions (id, user_id, tier, status, current_period_end, created_at, updated_at)
        VALUES (?, ?, ?, 'active', ?, ?, ?)
        ON CONFLICT(user_id) DO UPDATE SET tier = excluded.tier, status = 'active', current_period_end = excluded.current_period_end, updated_at = ?
      `).bind(crypto.randomUUID(), userId, tier, event.data.object.expires_at || (now + 2592000), now, now, now).run();
    }
  } else if (event.type === 'customer.subscription.deleted') {
    await env.DB.prepare(`UPDATE subscriptions SET status = 'canceled', updated_at = ? WHERE stripe_subscription_id = ?`)
      .bind(now, event.data.object.id).run();
  }

  return json({ received: true });
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

async function handleDashboard(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/dashboard/stats
  if (path === '/api/dashboard/stats') {
    const auth = await requireAuth(request, env);
    if (auth instanceof Response) return auth;
    const [tools, kits, reviews] = await Promise.all([
      env.DB.prepare('SELECT COUNT(*) as c FROM tools WHERE submitted_by = ?').bind(auth.userId).first(),
      env.DB.prepare('SELECT COUNT(*) as c FROM kits WHERE owner_id = ?').bind(auth.userId).first(),
      env.DB.prepare('SELECT COUNT(*) as c FROM reviews WHERE user_id = ?').bind(auth.userId).first(),
    ]);
    return json({
      tools_count: tools?.c || 0,
      kits_count: kits?.c || 0,
      reviews_count: reviews?.c || 0,
    });
  }

  // GET /api/dashboard/my-tools
  if (path === '/api/dashboard/my-tools' && request.method === 'GET') {
    const auth = await requireAuth(request, env);
    if (auth instanceof Response) return auth;
    const tools = await env.DB.prepare(
      'SELECT * FROM tools WHERE submitted_by = ? ORDER BY created_at DESC'
    ).bind(auth.userId).all();
    return json({ data: tools.results });
  }

  // POST /api/dashboard/claim - claim ownership of a tool
  if (path === '/api/dashboard/claim' && request.method === 'POST') {
    const auth = await requireAuth(request, env);
    if (auth instanceof Response) return auth;
    const body = await request.json().catch(() => ({}));
    const { toolSlug, reason } = body;
    if (!toolSlug || !reason) return json({ error: 'toolSlug and reason required' }, 400);
    // Store claim in KV for now (MVP)
    const claimKey = `claim:${toolSlug}:${auth.userId}`;
    await env.CACHE.put(claimKey, JSON.stringify({ reason, status: 'pending', created_at: Date.now() }), { expirationTtl: 86400 * 30 });
    return json({ message: 'Claim submitted for review' }, 201);
  }

  // POST /api/dashboard/kits - submit a new kit
  if (path === '/api/dashboard/kits' && request.method === 'POST') {
    const auth = await requireAuth(request, env);
    if (auth instanceof Response) return auth;
    const body = await request.json().catch(() => ({}));
    const { name, tagline, description, toolSlugs, price, certified } = body;
    if (!name || !description) return json({ error: 'name and description required' }, 400);
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const id = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);
    await env.DB.prepare(`
      INSERT INTO kits (id, name, slug, tagline, description, owner_id, is_paid, certified, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, 'pending', ?, ?)
    `).bind(id, name, slug, tagline || '', description, auth.userId, price === 'paid' ? 1 : 0, certified ? 1 : 0, now, now).run();
    return json({ id, slug, message: 'Kit submitted for review' }, 201);
  }

  return json({ error: 'Not found' }, 404);
}

// ─── Kits ────────────────────────────────────────────────────────────────────

async function handleKits(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/kits
  if (request.method === 'GET' && path === '/api/kits') {
    const category = url.searchParams.get('category');
    const certified = url.searchParams.get('certified');
    const sort = url.searchParams.get('sort') || 'newest';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;

    let query = `SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar FROM kits k LEFT JOIN users u ON k.owner_id = u.id WHERE k.status = 'published'`;
    const bindings: (string | number)[] = [];
    if (category) { query += ' AND k.category = ?'; bindings.push(category); }
    if (certified === 'true') { query += ' AND k.certified = 1'; }
    const sortCol = sort === 'quality_score' ? 'k.quality_score' : 'k.created_at';
    query += ` ORDER BY ${sortCol} DESC LIMIT ? OFFSET ?`;
    bindings.push(limit, offset);

    const result = await env.DB.prepare(query).bind(...bindings).all();
    return json({ data: result.results, pagination: { page, limit, offset } });
  }

  // GET /api/kits/:slug
  const slugMatch = path.match(/^\/api\/kits\/([^/]+)\/?$/);
  if (request.method === 'GET' && slugMatch) {
    const slug = slugMatch[1];
    const kit = await env.DB.prepare(`SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar FROM kits k LEFT JOIN users u ON k.owner_id = u.id WHERE k.slug = ?`).bind(slug).first();
    if (!kit) return json({ error: 'Kit not found' }, 404);
    const tools = await env.DB.prepare(`SELECT t.*, kt.role, kt.config_overrides, kt.display_order FROM kit_tools kt JOIN tools t ON kt.tool_id = t.id WHERE kt.kit_id = ? ORDER BY kt.display_order`).bind(kit.id).all();
    return json({ ...kit, tools: tools.results });
  }

  return json({ error: 'Method not allowed' }, 405);
}

// ─── Tools & Reviews ─────────────────────────────────────────────────────────

async function handleTools(request: Request, env: Env, ip: string): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/tools/:slug
  const toolMatch = path.match(/^\/api\/tools\/([^/]+)\/?$/);
  if (request.method === 'GET' && toolMatch) {
    const slug = toolMatch[1];
    const tool = await env.DB.prepare('SELECT * FROM tools WHERE slug = ?').bind(slug).first();
    if (!tool) return json({ error: 'Tool not found' }, 404);
    const qs = await getQualityScore(tool.id, env);
    return json({ ...tool, quality_score: qs });
  }

  // GET|POST /api/tools/:slug/reviews
  const reviewMatch = path.match(/^\/api\/tools\/([^/]+)\/reviews\/?$/);
  if (reviewMatch) {
    const toolSlug = reviewMatch[1];
    const tool = await env.DB.prepare('SELECT id FROM tools WHERE slug = ?').bind(toolSlug).first();
    if (!tool) return json({ error: 'Tool not found' }, 404);

    if (request.method === 'GET') {
      const page = parseInt(url.searchParams.get('page') || '1');
      const limit = Math.min(parseInt(url.searchParams.get('limit') || '10'), 50);
      const offset = (page - 1) * limit;
      const reviews = await env.DB.prepare(`SELECT r.*, u.name as user_name, u.avatar_url as user_avatar FROM reviews r LEFT JOIN users u ON r.user_id = u.id WHERE r.tool_id = ? ORDER BY r.created_at DESC LIMIT ? OFFSET ?`).bind(tool.id, limit, offset).all();
      return json({ data: reviews.results, pagination: { page, limit, offset } });
    }

    if (request.method === 'POST') {
      const auth = await requireAuth(request, env);
      if (auth instanceof Response) return auth;

      const secret = env.TURNSTILE_SECRET_KEY;
      const body = await request.clone().json().catch(() => ({}));
      const { rating, content, turnstile_token } = body;

      if (!turnstile_token) return json({ error: 'Turnstile verification required' }, 400);
      if (secret) {
        const valid = await verifyTurnstile(turnstile_token, ip, secret);
        if (!valid) return json({ error: 'Turnstile verification failed' }, 400);
      }

      if (!rating || rating < 1 || rating > 5) return json({ error: 'Rating must be 1-5' }, 400);

      const id = crypto.randomUUID();
      const now = Math.floor(Date.now() / 1000);
      await env.DB.prepare(`INSERT INTO reviews (id, tool_id, user_id, rating, content, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)`).bind(id, tool.id, auth.userId, rating, content || '', now, now).run();
      return json({ id, message: 'Review submitted' }, 201);
    }
  }

  return json({ error: 'Not found' }, 404);
}

// ─── User ────────────────────────────────────────────────────────────────────

async function handleUser(request: Request, env: Env): Promise<Response> {
  const auth = await requireAuth(request, env);
  if (auth instanceof Response) return auth;
  const user = await env.DB.prepare('SELECT id, name, avatar_url, email, created_at FROM users WHERE id = ?').bind(auth.userId).first();
  if (!user) return json({ error: 'User not found' }, 404);
  return json(user);
}

// ─── Auth Middleware ─────────────────────────────────────────────────────────

async function requireAuth(request: Request, env: Env): Promise<{ userId: string } | Response> {
  const token = getSessionToken(request);
  if (!token) return json({ error: 'Unauthorized' }, 401);
  const userId = await env.CACHE.get(`session:${token}`);
  if (!userId) return json({ error: 'Session expired' }, 401);
  return { userId };
}

function getSessionToken(request: Request): string | null {
  const cookies = Object.fromEntries(
    (request.headers.get('Cookie') || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  return cookies.session || null;
}

// ─── Quality Score ───────────────────────────────────────────────────────────

async function getQualityScore(toolId: string, env: Env): Promise<number> {
  const cached = await env.CACHE.get(`qs:${toolId}`);
  if (cached) {
    const data = JSON.parse(cached);
    return typeof data.score === 'number' ? data.score : data;
  }
  return 50; // neutral default
}

async function calculateAllQualityScores(env: Env): Promise<void> {
  const tools = await env.DB.prepare('SELECT id, slug FROM tools').all();
  const now = Math.floor(Date.now() / 1000);

  for (const tool of tools.results as any[]) {
    const reviewCount = (await env.DB.prepare('SELECT COUNT(*) as c FROM reviews WHERE tool_id = ?').bind(tool.id).first())?.c || 0;
    const communityScore = Math.min(reviewCount * 2, 100);

    const toolData = await env.DB.prepare('SELECT certified FROM tools WHERE id = ?').bind(tool.id).first();
    const certScore = toolData?.certified ? 100 : 50;

    const secReport = await env.DB.prepare('SELECT risk_level FROM security_reports WHERE tool_id = ? ORDER BY scanned_at DESC LIMIT 1').bind(tool.id).first();
    let securityScore = 100;
    if (secReport?.risk_level === 'high') securityScore = 0;
    else if (secReport?.risk_level === 'medium') securityScore = 50;
    else if (secReport?.risk_level === 'low') securityScore = 80;

    const avgResult = await env.DB.prepare('SELECT AVG(rating) as avg FROM reviews WHERE tool_id = ?').bind(tool.id).first();
    const ratingScore = avgResult?.avg ? avgResult.avg * 20 : 50;

    const score = Math.round(
      communityScore * 0.20 +
      certScore * 0.20 +
      securityScore * 0.30 +
      ratingScore * 0.15 +
      50 * 0.15
    );

    await env.CACHE.put(
      `qs:${tool.id}`,
      JSON.stringify({ score, communityScore, certScore, securityScore, ratingScore, updatedAt: now }),
      { expirationTtl: 86400 }
    );
  }

  console.log(`[cron] Quality scores updated for ${tools.results.length} tools`);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
  });
}

async function verifyTurnstile(token: string, ip: string, secret: string): Promise<boolean> {
  try {
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({ secret, response: token, remoteip: ip }),
    });
    const data = await res.json();
    return data.success === true;
  } catch {
    return false;
  }
}
