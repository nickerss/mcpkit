/**
 * MCPKIT v3.0 — Cloudflare Pages _worker.js
 * Handles API routes; serves static Astro build for everything else.
 * 
 * API Endpoints:
 *   GET  /api/health
 *   GET  /api/tools/[slug]          — read tool with KV-cached quality score
 *   POST /api/tools/[slug]/reviews  — submit review (Turnstile + auth)
 *   GET  /api/tools/[slug]/reviews  — paginated reviews
 *   POST /api/stripe/webhook        — Stripe webhook
 *   GET  /api/dashboard/stats       — protected
 *   GET  /api/kits                  — list kits
 *   GET  /api/kits/[slug]           — single kit with tools
 *   POST /api/auth/github           — GitHub OAuth initiation
 *   GET  /api/auth/callback         — GitHub OAuth callback
 *   POST /api/auth/logout           — logout
 *   GET  /api/user                  — current user info
 *
 * KV Bindings: CACHE
 * D1 Binding:  DB
 * Secret:      TURNSTILE_SECRET_KEY
 * Secret:      STRIPE_WEBHOOK_SECRET
 */

const ALLOWEDOrigins = ['https://mcpkit.run', 'https://www.mcpkit.run', 'https://mcpkit-vyg.pages.dev', undefined];

function corsHeaders(origin = '*') {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  };
}

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...corsHeaders(),
      ...(init.headers || {}),
    },
  });
}

// ─── Auth ───────────────────────────────────────────────────────────────────

async function getSessionUser(request, env) {
  const cookies = Object.fromEntries(
    (request.headers.get('Cookie') || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  const token = cookies.session;
  if (!token) return null;
  const userId = await env.CACHE.get(`session:${token}`);
  return userId || null;
}

async function requireAuth(request, env) {
  const userId = await getSessionUser(request, env);
  if (!userId) return json({ error: 'Unauthorized' }, { status: 401 });
  return { userId };
}

// ─── Turnstile ─────────────────────────────────────────────────────────────

async function verifyTurnstile(token, ip, secret) {
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

// ─── Quality Score (KV-cached) ──────────────────────────────────────────────

async function getQualityScore(toolId, db, cache) {
  const cacheKey = `qs:${toolId}`;
  const cached = await cache.get(cacheKey);
  if (cached) return JSON.parse(cached);

  // Fallback: return 50 (neutral)
  return { score: 50, source: 'default' };
}

// ─── Route Handlers ────────────────────────────────────────────────────────

async function handleHealth(env) {
  return json({ status: 'ok', timestamp: Date.now() });
}

async function handleToolsGET(slug, env) {
  const tool = await env.DB
    .prepare('SELECT * FROM tools WHERE slug = ?')
    .bind(slug)
    .first();
  if (!tool) return json({ error: 'Tool not found' }, { status: 404 });

  const qs = await getQualityScore(tool.id, env.DB, env.CACHE);
  return json({ ...tool, quality_score: qs.score });
}

async function handleToolReviewsGET(toolId, url, env) {
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '10'), 50);
  const offset = (page - 1) * limit;

  const reviews = await env.DB
    .prepare(`
      SELECT r.*, u.name as user_name, u.avatar_url as user_avatar
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      WHERE r.tool_id = ?
      ORDER BY r.created_at DESC
      LIMIT ? OFFSET ?
    `)
    .bind(toolId, limit, offset)
    .all();

  return json({ data: reviews.results, pagination: { page, limit, offset } });
}

async function handleToolReviewsPOST(toolId, request, env, ip) {
  // Auth required
  const auth = await requireAuth(request, env);
  if (auth instanceof Response) return auth;

  // Turnstile required
  const body = await request.clone().json().catch(() => ({}));
  const turnstileToken = body.turnstile_token;
  const secret = env.TURNSTILE_SECRET_KEY;

  if (!turnstileToken) {
    return json({ error: 'Turnstile verification required' }, { status: 400 });
  }

  if (secret) {
    const valid = await verifyTurnstile(turnstileToken, ip, secret);
    if (!valid) return json({ error: 'Turnstile verification failed' }, { status: 400 });
  }

  const { rating, content } = body;
  if (!rating || rating < 1 || rating > 5) {
    return json({ error: 'Rating must be 1-5' }, { status: 400 });
  }

  const id = crypto.randomUUID();
  const now = Math.floor(Date.now() / 1000);

  await env.DB
    .prepare(`
      INSERT INTO reviews (id, tool_id, user_id, rating, content, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(id, toolId, auth.userId, rating, content || '', now, now)
    .run();

  return json({ id, message: 'Review submitted' }, { status: 201 });
}

async function handleStripeWebhook(request, env) {
  if (request.method !== 'POST') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const payload = await request.text();
  const sig = request.headers.get('stripe-signature');
  const secret = env.STRIPE_WEBHOOK_SECRET;

  // Basic parse — production should verify signature
  let event;
  try {
    event = JSON.parse(payload);
  } catch {
    return json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const now = Math.floor(Date.now() / 1000);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const { user_id: userId, tier } = session.metadata || {};
    if (userId && tier) {
      await env.DB
        .prepare(`
          INSERT INTO subscriptions (id, user_id, tier, status, current_period_end, created_at, updated_at)
          VALUES (?, ?, ?, 'active', ?, ?, ?)
          ON CONFLICT(user_id) DO UPDATE SET
            tier = excluded.tier,
            status = 'active',
            current_period_end = excluded.current_period_end,
            updated_at = ?
        `)
        .bind(
          crypto.randomUUID(),
          userId,
          tier,
          session.expires_at || (now + 2592000),
          now,
          now,
          now
        )
        .run();
    }
  } else if (event.type === 'customer.subscription.deleted') {
    const sub = event.data.object;
    await env.DB
      .prepare(`UPDATE subscriptions SET status = 'canceled', updated_at = ? WHERE stripe_subscription_id = ?`)
      .bind(now, sub.id)
      .run();
  }

  return json({ received: true });
}

async function handleDashboardStats(request, env) {
  const auth = await requireAuth(request, env);
  if (auth instanceof Response) return auth;

  const [tools, kits, reviews] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) as c FROM tools WHERE owner_id = ?').bind(auth.userId).first(),
    env.DB.prepare('SELECT COUNT(*) as c FROM kits WHERE owner_id = ?').bind(auth.userId).first(),
    env.DB.prepare('SELECT COUNT(*) as c FROM reviews WHERE user_id = ?').bind(auth.userId).first(),
  ]);

  return json({
    tools_count: tools?.c || 0,
    kits_count: kits?.c || 0,
    reviews_count: reviews?.c || 0,
  });
}

async function handleAuthGithub(env) {
  const state = crypto.randomUUID();
  const redirectUri = `https://mcpkit.run/api/auth/callback`;
  const url = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&scope=read:user,user:email`;
  await env.CACHE.put(`oauth_state:${state}`, 'pending', { expirationTtl: 600 });
  return Response.redirect(url, 302);
}

async function handleAuthCallback(request, env) {
  const url = new URL(request.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  if (!code || !state) return json({ error: 'Missing code or state' }, { status: 400 });

  const storedState = await env.CACHE.get(`oauth_state:${state}`);
  if (!storedState) return json({ error: 'Invalid state' }, { status: 400 });
  await env.CACHE.delete(`oauth_state:${state}`);

  // Exchange code for token
  const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });
  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;
  if (!accessToken) return json({ error: 'Failed to get access token' }, { status: 400 });

  // Get GitHub user
  const userRes = await fetch('https://api.github.com/user', {
    headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' },
  });
  const githubUser = await userRes.json();

  // Upsert user in D1
  const userId = crypto.randomUUID();
  const now = Math.floor(Date.now() / 1000);
  await env.DB
    .prepare(`
      INSERT INTO users (id, github_id, name, avatar_url, email, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(github_id) DO UPDATE SET
        name = excluded.name,
        avatar_url = excluded.avatar_url,
        email = excluded.email
    `)
    .bind(userId, String(githubUser.id), githubUser.login, githubUser.avatar_url, githubUser.email || '', now)
    .run();

  // Generate session token (simplified — use JWT in production)
  const sessionToken = crypto.randomUUID();
  await env.CACHE.put(`session:${sessionToken}`, userId, { expirationTtl: 60 * 60 * 24 * 7 });

  return new Response(null, {
    status: 302,
    headers: {
      Location: '/dashboard/',
      'Set-Cookie': `session=${sessionToken}; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=${60 * 60 * 24 * 7}`,
    },
  });
}

async function handleAuthLogout(request, env) {
  const cookies = Object.fromEntries(
    (request.headers.get('Cookie') || '').split(';').map(c => {
      const [k, ...v] = c.trim().split('=');
      return [k, v.join('=')];
    })
  );
  const token = cookies.session;
  if (token) await env.CACHE.delete(`session:${token}`);
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/',
      'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=Strict; Path=/; Max-Age=0',
    },
  });
}

async function handleUser(request, env) {
  const auth = await requireAuth(request, env);
  if (auth instanceof Response) return auth;
  const user = await env.DB.prepare('SELECT id, name, avatar_url, email, created_at FROM users WHERE id = ?').bind(auth.userId).first();
  if (!user) return json({ error: 'User not found' }, { status: 404 });
  return json(user);
}

async function handleKitsList(url, env) {
  const category = url.searchParams.get('category');
  const certified = url.searchParams.get('certified');
  const sort = url.searchParams.get('sort') || 'newest';
  const page = parseInt(url.searchParams.get('page') || '1');
  const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
  const offset = (page - 1) * limit;

  let query = `
    SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar
    FROM kits k
    LEFT JOIN users u ON k.owner_id = u.id
    WHERE k.status = 'published'
  `;
  const bindings = [];
  if (category) { query += ' AND k.category = ?'; bindings.push(category); }
  if (certified === 'true') { query += ' AND k.certified = 1'; }

  const sortCol = sort === 'quality_score' ? 'k.quality_score' : 'k.created_at';
  query += ` ORDER BY ${sortCol} DESC LIMIT ? OFFSET ?`;
  bindings.push(limit, offset);

  const result = await env.DB.prepare(query).bind(...bindings).all();
  return json({ data: result.results, pagination: { page, limit, offset } });
}

async function handleKitsSlug(slug, env) {
  const kit = await env.DB
    .prepare(`
      SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar
      FROM kits k LEFT JOIN users u ON k.owner_id = u.id
      WHERE k.slug = ?
    `)
    .bind(slug)
    .first();
  if (!kit) return json({ error: 'Kit not found' }, { status: 404 });

  const tools = await env.DB
    .prepare(`
      SELECT t.*, kt.role, kt.config_overrides, kt.display_order
      FROM kit_tools kt
      JOIN tools t ON kt.tool_id = t.id
      WHERE kt.kit_id = ?
      ORDER BY kt.display_order
    `)
    .bind(kit.id)
    .all();

  return json({ ...kit, tools: tools.results });
}

// ─── Main Fetch Handler ──────────────────────────────────────────────────────

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;
    const ip = request.headers.get('CF-Connecting-IP') || '';

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders(url.origin) });
    }

    // ── API Routes ────────────────────────────────────────────────────────

    // Health
    if (path === '/api/health') return handleHealth(env);

    // Auth
    if (path === '/api/auth/github') return handleAuthGithub(env);
    if (path === '/api/auth/callback') return handleAuthCallback(request, env);
    if (path === '/api/auth/logout') return handleAuthLogout(request, env);
    if (path === '/api/user') return handleUser(request, env);

    // Stripe webhook
    if (path === '/api/stripe/webhook') return handleStripeWebhook(request, env);

    // Dashboard
    if (path === '/api/dashboard/stats') return handleDashboardStats(request, env);

    // Kits
    if (path === '/api/kits') return handleKitsList(url, env);
    if (path.startsWith('/api/kits/')) {
      const slug = path.split('/').pop();
      return handleKitsSlug(slug, env);
    }

    // Tools: /api/tools/[slug]
    const toolsMatch = path.match(/^\/api\/tools\/([^/]+)\/?$/);
    if (toolsMatch) {
      const slug = toolsMatch[1];
      if (request.method === 'GET') return handleToolsGET(slug, env);
    }

    // Tool Reviews: /api/tools/[slug]/reviews
    const reviewsMatch = path.match(/^\/api\/tools\/([^/]+)\/reviews\/?$/);
    if (reviewsMatch) {
      const toolSlug = reviewsMatch[1];
      // Look up tool id from slug
      const tool = await env.DB.prepare('SELECT id FROM tools WHERE slug = ?').bind(toolSlug).first();
      if (!tool) return json({ error: 'Tool not found' }, { status: 404 });
      if (request.method === 'GET') return handleToolReviewsGET(tool.id, url, env);
      if (request.method === 'POST') return handleToolReviewsPOST(tool.id, request, env, ip);
    }

    // ── Not an API route — serve static Astro build ──────────────────────
    // For Cloudflare Pages, the static assets are served automatically.
    // This worker runs at the edge for /api/* routes only.
    return fetch(request);
  },

  // Cron: runs daily at 00:00 UTC — refresh quality scores in KV
  async scheduled(controller, env, ctx) {
    const tools = await env.DB.prepare('SELECT id, slug FROM tools').all();
    const now = Math.floor(Date.now() / 1000);

    for (const tool of tools.results) {
      // Community score: review count (max 100 at 50 reviews)
      const reviewCount = await env.DB
        .prepare('SELECT COUNT(*) as c FROM reviews WHERE tool_id = ?')
        .bind(tool.id)
        .first();
      const communityScore = Math.min((reviewCount?.c || 0) * 2, 100);

      // Certification score
      const toolData = await env.DB.prepare('SELECT certified FROM tools WHERE id = ?').bind(tool.id).first();
      const certScore = toolData?.certified ? 100 : 50;

      // Security score
      const secReport = await env.DB
        .prepare('SELECT risk_level FROM security_reports WHERE tool_id = ? ORDER BY scanned_at DESC LIMIT 1')
        .bind(tool.id)
        .first();
      let securityScore = 100;
      if (secReport?.risk_level === 'high') securityScore = 0;
      else if (secReport?.risk_level === 'medium') securityScore = 50;
      else if (secReport?.risk_level === 'low') securityScore = 80;

      // Avg rating
      const avgResult = await env.DB
        .prepare('SELECT AVG(rating) as avg FROM reviews WHERE tool_id = ?')
        .bind(tool.id)
        .first();
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
  },
};
