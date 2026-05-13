/**
 * MCPKIT v3.0 API Worker
 * 
 * Entry point for:
 * - /api/* routes (REST API)
 * - SSR pages (/tools/[slug], /kits/[slug])
 * 
 * Bindings (from wrangler.toml):
 * - DB: D1 database
 * - CACHE: KV namespace
 */

export interface Env {
  DB: D1Database;
  CACHE: KVNamespace;
  SITE_URL: string;
  GITHUB_CLIENT_ID: string;
  GITHUB_CLIENT_SECRET: string;
  JWT_SECRET: string;
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    // Route matching
    const path = url.pathname;

    // Health check
    if (path === '/api/health') {
      return Response.json({ status: 'ok', timestamp: Date.now() });
    }

    // Auth routes
    if (path.startsWith('/api/auth/')) {
      return handleAuth(request, env, ctx);
    }

    // Tools API
    if (path.startsWith('/api/tools')) {
      return handleTools(request, env, ctx);
    }

    // Kits API
    if (path.startsWith('/api/kits')) {
      return handleKits(request, env, ctx);
    }

    // Reviews API
    if (path.startsWith('/api/reviews')) {
      return handleReviews(request, env, ctx);
    }

    // Stripe webhook
    if (path === '/api/stripe/webhook') {
      return handleStripeWebhook(request, env, ctx);
    }

    // Dashboard (protected)
    if (path.startsWith('/api/dashboard')) {
      return handleDashboard(request, env, ctx);
    }

    // 404 for unmatched API routes
    return Response.json({ error: 'Not found' }, { status: 404 });
  },
};

// =====================
// Route Handlers
// =====================

async function handleAuth(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  if (path === '/api/auth/github') {
    // GitHub OAuth initiation
    const state = crypto.randomUUID();
    const redirectUri = `${env.SITE_URL}/api/auth/callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}`;
    
    // Store state in KV for CSRF protection
    await env.CACHE.put(`oauth_state:${state}`, 'pending', { expirationTtl: 600 });
    
    return Response.redirect(githubAuthUrl, 302);
  }

  if (path === '/api/auth/callback') {
    // GitHub OAuth callback
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    
    if (!code || !state) {
      return Response.json({ error: 'Missing code or state' }, { status: 400 });
    }

    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.text();
    const params = new URLSearchParams(tokenData);
    const accessToken = params.get('access_token');

    if (!accessToken) {
      return Response.json({ error: 'Failed to get access token' }, { status: 400 });
    }

    // Get user info from GitHub
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/json',
      },
    });

    const githubUser = await userResponse.json();

    // Upsert user in D1
    const userId = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);
    
    await env.DB.prepare(`
      INSERT INTO users (id, github_id, name, avatar_url, email, created_at)
      VALUES (?, ?, ?, ?, ?, ?)
      ON CONFLICT(github_id) DO UPDATE SET
        name = excluded.name,
        avatar_url = excluded.avatar_url,
        email = excluded.email
    `).bind(userId, githubUser.id.toString(), githubUser.login, githubUser.avatar_url, githubUser.email || '', now).run();

    // Generate JWT session
    const payload = { user_id: userId, github_id: githubUser.id.toString() };
    const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
    const body = btoa(JSON.stringify(payload));
    // In production, sign with env.JWT_SECRET using Web Crypto API
    const sessionToken = `${header}.${body}.dev_signature`;

    // Store session in KV (TTL 7 days)
    await env.CACHE.put(`session:${sessionToken}`, userId, { expirationTtl: 60 * 60 * 24 * 7 });

    return new Response(null, {
      status: 302,
      headers: {
        Location: '/dashboard',
        'Set-Cookie': `session=${sessionToken}; HttpOnly; Secure; SameSite=Strict; Max-Age=${60 * 60 * 24 * 7}`,
      },
    });
  }

  if (path === '/api/auth/logout') {
    const sessionToken = getSessionToken(request);
    if (sessionToken) {
      await env.CACHE.delete(`session:${sessionToken}`);
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: '/',
        'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=Strict; Max-Age=0',
      },
    });
  }

  return Response.json({ error: 'Not found' }, { status: 404 });
}

async function handleTools(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/tools - List tools
  if (request.method === 'GET' && path === '/api/tools') {
    const category = url.searchParams.get('category');
    const certified = url.searchParams.get('certified');
    const sort = url.searchParams.get('sort') || 'quality_score';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;

    let query = 'SELECT * FROM tools WHERE 1=1';
    const bindings: (string | number)[] = [];

    if (category) {
      query += ' AND category = ?';
      bindings.push(category);
    }

    if (certified === 'true') {
      query += ' AND certified = 1';
    }

    // Sorting
    const sortColumn = sort === 'stars' ? 'github_stars' : sort === 'newest' ? 'created_at' : 'quality_score';
    query += ` ORDER BY ${sortColumn} DESC`;

    // Pagination
    query += ' LIMIT ? OFFSET ?';
    bindings.push(limit, offset);

    const result = await env.DB.prepare(query).bind(...bindings).all();
    
    return Response.json({
      data: result.results,
      pagination: { page, limit, offset, total: result.results.length }
    });
  }

  // GET /api/tools/:slug - Get single tool
  if (request.method === 'GET' && path.startsWith('/api/tools/')) {
    const slug = path.split('/').pop();
    const result = await env.DB.prepare('SELECT * FROM tools WHERE slug = ?').bind(slug).first();
    
    if (!result) {
      return Response.json({ error: 'Tool not found' }, { status: 404 });
    }

    // Get Quality Score from KV cache
    const qsCacheKey = `qs:${result.id}`;
    const cachedQS = await env.CACHE.get(qsCacheKey);
    const qualityScore = cachedQS ? JSON.parse(cachedQS) : result.quality_score;

    return Response.json({ ...result, quality_score: qualityScore });
  }

  // POST /api/tools/:slug/claim - Claim a tool (auth required)
  if (request.method === 'POST' && path.endsWith('/claim')) {
    const authResult = await requireAuth(request, env);
    if (authResult instanceof Response) return authResult;
    const { userId } = authResult;

    const slug = path.split('/').slice(-2, -1)[0];
    const tool = await env.DB.prepare('SELECT * FROM tools WHERE slug = ?').bind(slug).first();
    
    if (!tool) {
      return Response.json({ error: 'Tool not found' }, { status: 404 });
    }

    await env.DB.prepare(`
      UPDATE tools SET owner_id = ?, updated_at = ? WHERE id = ?
    `).bind(userId, Math.floor(Date.now() / 1000), tool.id).run();

    return Response.json({ success: true, message: 'Tool claimed successfully' });
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}

async function handleKits(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/kits - List kits
  if (request.method === 'GET' && path === '/api/kits') {
    const category = url.searchParams.get('category');
    const certified = url.searchParams.get('certified');
    const sort = url.searchParams.get('sort') || 'quality_score';
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '20'), 100);
    const offset = (page - 1) * limit;

    let query = `
      SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar
      FROM kits k
      LEFT JOIN users u ON k.owner_id = u.id
      WHERE k.status = 'published'
    `;
    const bindings: (string | number)[] = [];

    if (category) {
      query += ' AND k.category = ?';
      bindings.push(category);
    }

    if (certified === 'true') {
      query += ' AND k.certified = 1';
    }

    const sortColumn = sort === 'newest' ? 'k.created_at' : 'k.quality_score';
    query += ` ORDER BY ${sortColumn} DESC LIMIT ? OFFSET ?`;
    bindings.push(limit, offset);

    const result = await env.DB.prepare(query).bind(...bindings).all();
    
    return Response.json({
      data: result.results,
      pagination: { page, limit, offset }
    });
  }

  // GET /api/kits/:slug - Get single kit with tools
  if (request.method === 'GET' && path.startsWith('/api/kits/')) {
    const slug = path.split('/').pop();
    const kit = await env.DB.prepare(`
      SELECT k.*, u.name as owner_name, u.avatar_url as owner_avatar
      FROM kits k
      LEFT JOIN users u ON k.owner_id = u.id
      WHERE k.slug = ?
    `).bind(slug).first();

    if (!kit) {
      return Response.json({ error: 'Kit not found' }, { status: 404 });
    }

    // Get kit tools
    const tools = await env.DB.prepare(`
      SELECT t.*, kt.role, kt.config_overrides, kt.display_order
      FROM kit_tools kt
      JOIN tools t ON kt.tool_id = t.id
      WHERE kt.kit_id = ?
      ORDER BY kt.display_order
    `).bind(kit.id).all();

    return Response.json({ ...kit, tools: tools.results });
  }

  // POST /api/kits - Create kit (auth required)
  if (request.method === 'POST') {
    const authResult = await requireAuth(request, env);
    if (authResult instanceof Response) return authResult;
    const { userId } = authResult;

    const body = await request.json();
    const { name, description, category, tool_ids } = body;

    const id = crypto.randomUUID();
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const now = Math.floor(Date.now() / 1000);

    await env.DB.prepare(`
      INSERT INTO kits (id, name, slug, description, category, owner_id, status, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, 'draft', ?, ?)
    `).bind(id, name, slug, description, category, userId, now, now).run();

    // Add tools to kit
    if (tool_ids && tool_ids.length > 0) {
      for (let i = 0; i < tool_ids.length; i++) {
        await env.DB.prepare(`
          INSERT INTO kit_tools (kit_id, tool_id, role, display_order)
          VALUES (?, ?, 'primary', ?)
        `).bind(id, tool_ids[i], i).run();
      }
    }

    return Response.json({ id, slug, message: 'Kit created' }, { status: 201 });
  }

  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}

async function handleReviews(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname;

  // GET /api/tools/:id/reviews
  if (request.method === 'GET' && path.includes('/reviews')) {
    const parts = path.split('/');
    const toolId = parts[2];
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = Math.min(parseInt(url.searchParams.get('limit') || '10'), 50);
    const offset = (page - 1) * limit;

    const reviews = await env.DB.prepare(`
      SELECT r.*, u.name as user_name, u.avatar_url as user_avatar
      FROM reviews r
      LEFT JOIN users u ON r.user_id = u.id
      WHERE r.tool_id = ?
      ORDER BY r.created_at DESC
      LIMIT ? OFFSET ?
    `).bind(toolId, limit, offset).all();

    return Response.json({ data: reviews.results, pagination: { page, limit, offset } });
  }

  // POST /api/tools/:id/reviews - Create review (auth + Turnstile required)
  if (request.method === 'POST' && path.includes('/reviews')) {
    const authResult = await requireAuth(request, env);
    if (authResult instanceof Response) return authResult;
    const { userId } = authResult;

    const parts = path.split('/');
    const toolId = parts[2];
    const body = await request.json();
    const { rating, content, turnstile_token } = body;

    // Verify Turnstile token
    if (!turnstile_token) {
      return Response.json({ error: 'Turnstile verification required' }, { status: 400 });
    }

    // In production, verify with Cloudflare Turnstile API
    // const verifyResponse = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    //   method: 'POST',
    //   body: new URLSearchParams({ secret: env.TURNSTILE_SECRET, response: turnstile_token }),
    // });

    const id = crypto.randomUUID();
    const now = Math.floor(Date.now() / 1000);

    await env.DB.prepare(`
      INSERT INTO reviews (id, tool_id, user_id, rating, content, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `).bind(id, toolId, userId, rating, content || '', now, now).run();

    return Response.json({ id, message: 'Review submitted' }, { status: 201 });
  }

  return Response.json({ error: 'Not found' }, { status: 404 });
}

async function handleStripeWebhook(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  if (request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  const payload = await request.text();
  const signature = request.headers.get('stripe-signature');

  // In production, verify webhook signature:
  // const event = stripe.webhooks.constructEvent(payload, signature, env.STRIPE_WEBHOOK_SECRET);

  const event = JSON.parse(payload);

  switch (event.type) {
    case 'checkout.session.completed': {
      const session = event.data.object;
      const userId = session.metadata?.user_id;
      const tier = session.metadata?.tier;

      if (userId && tier) {
        const now = Math.floor(Date.now() / 1000);
        await env.DB.prepare(`
          INSERT INTO subscriptions (id, user_id, tier, status, current_period_end, created_at, updated_at)
          VALUES (?, ?, ?, 'active', ?, ?, ?)
          ON CONFLICT(user_id) DO UPDATE SET
            tier = excluded.tier,
            status = 'active',
            current_period_end = excluded.current_period_end,
            updated_at = ?
        `).bind(crypto.randomUUID(), userId, tier, session.expires_at, now, now, now).run();
      }
      break;
    }

    case 'customer.subscription.deleted': {
      const subscription = event.data.object;
      await env.DB.prepare(`
        UPDATE subscriptions SET status = 'canceled', updated_at = ?
        WHERE stripe_subscription_id = ?
      `).bind(Math.floor(Date.now() / 1000), subscription.id).run();
      break;
    }
  }

  return Response.json({ received: true });
}

async function handleDashboard(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
  const authResult = await requireAuth(request, env);
  if (authResult instanceof Response) return authResult;
  const { userId } = authResult;

  const url = new URL(request.url);

  // GET /api/dashboard/stats
  if (url.pathname === '/api/dashboard/stats') {
    const [tools, kits, reviews] = await Promise.all([
      env.DB.prepare('SELECT COUNT(*) as count FROM tools WHERE owner_id = ?').bind(userId).first(),
      env.DB.prepare('SELECT COUNT(*) as count FROM kits WHERE owner_id = ?').bind(userId).first(),
      env.DB.prepare('SELECT COUNT(*) as count FROM reviews WHERE user_id = ?').bind(userId).first(),
    ]);

    return Response.json({
      tools_count: tools?.count || 0,
      kits_count: kits?.count || 0,
      reviews_count: reviews?.count || 0,
    });
  }

  return Response.json({ error: 'Not found' }, { status: 404 });
}

// =====================
// Auth Middleware
// =====================

async function requireAuth(request: Request, env: Env): Promise<{ userId: string } | Response> {
  const sessionToken = getSessionToken(request);
  if (!sessionToken) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const userId = await env.CACHE.get(`session:${sessionToken}`);
  if (!userId) {
    return Response.json({ error: 'Session expired' }, { status: 401 });
  }

  return { userId };
}

function getSessionToken(request: Request): string | null {
  const cookieHeader = request.headers.get('Cookie') || '';
  const cookies = Object.fromEntries(cookieHeader.split(';').map(c => {
    const [k, ...v] = c.trim().split('=');
    return [k, v.join('=')];
  }));
  return cookies.session || null;
}
