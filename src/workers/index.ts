/**
 * MCPKIT Workers API v3.0
 * Cloudflare Workers + D1 + KV
 */

interface Env {
  DB: D1Database;
  SESSION_CACHE: KVNamespace;
}

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
};

function jsonResponse(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: JSON_HEADERS,
  });
}

function errorResponse(message: string, status = 400): Response {
  return jsonResponse({ error: message }, status);
}

function generateId(): string {
  return crypto.randomUUID();
}

function getSessionToken(request: Request): string | null {
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/session=([^;]+)/);
  return match ? match[1] : null;
}

async function getUserFromSession(request: Request, env: Env): Promise<string | null> {
  const token = getSessionToken(request);
  if (!token) return null;
  const userId = await env.SESSION_CACHE.get(`session:${token}`);
  return userId;
}

// ─────────────────────────────────────────
// GitHub OAuth
// ─────────────────────────────────────────
export async function handleAuth(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);

  if (url.pathname === '/api/auth/github') {
    const state = generateId();
    await env.SESSION_CACHE.put(`oauth_state:${state}`, 'pending', { expirationTtl: 600 });
    const redirectUri = `${url.origin}/api/auth/callback`;
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}&redirect_uri=${redirectUri}&state=${state}&scope=read:user`;
    return Response.redirect(githubAuthUrl, 302);
  }

  if (url.pathname === '/api/auth/callback') {
    const code = url.searchParams.get('code');
    const state = url.searchParams.get('state');
    if (!code || !state) return errorResponse('Missing code or state', 400);

    const savedState = await env.SESSION_CACHE.get(`oauth_state:${state}`);
    if (savedState !== 'pending') return errorResponse('Invalid state', 400);
    await env.SESSION_CACHE.delete(`oauth_state:${state}`);

    // Exchange code for access token
    const tokenRes = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: env.GITHUB_CLIENT_ID,
        client_secret: env.GITHUB_CLIENT_SECRET,
        code,
      }),
    });
    const tokenData = await tokenRes.text();
    const accessToken = new URLSearchParams(tokenData).get('access_token');
    if (!accessToken) return errorResponse('Failed to get access token', 502);

    // Get GitHub user
    const userRes = await fetch('https://api.github.com/user', {
      headers: { Authorization: `Bearer ${accessToken}`, Accept: 'application/json' },
    });
    const githubUser = await userRes.json();

    // Upsert user in D1
    const existing = await env.DB.prepare('SELECT id FROM users WHERE github_id = ?').bind(githubUser.id.toString()).first();
    let userId: string;
    if (existing) {
      userId = existing.id as string;
      await env.DB.prepare('UPDATE users SET username = ?, email = ?, avatar_url = ?, updated_at = ? WHERE id = ?')
        .bind(githubUser.login, githubUser.email, githubUser.avatar_url, Date.now(), userId).run();
    } else {
      userId = generateId();
      await env.DB.prepare('INSERT INTO users (id, github_id, username, email, avatar_url, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?)')
        .bind(userId, githubUser.id.toString(), githubUser.login, githubUser.email, githubUser.avatar_url, Date.now(), Date.now()).run();
    }

    // Create session
    const sessionToken = generateId();
    await env.SESSION_CACHE.put(`session:${sessionToken}`, userId, { expirationTtl: 60 * 60 * 24 * 7 });
    return new Response(JSON.stringify({ ok: true }), {
      status: 302,
      headers: {
        'Content-Type': 'application/json',
        'Set-Cookie': `session=${sessionToken}; HttpOnly; Secure; SameSite=Lax; Max-Age=${60 * 60 * 24 * 7}; Path=/`,
        'Location': '/dashboard',
      },
    });
  }

  if (url.pathname === '/api/auth/logout') {
    const token = getSessionToken(request);
    if (token) await env.SESSION_CACHE.delete(`session:${token}`);
    return new Response(JSON.stringify({ ok: true }), {
      status: 302,
      headers: { 'Set-Cookie': 'session=; HttpOnly; Secure; SameSite=Lax; Max-Age=0; Path=/', Location: '/' },
    });
  }

  return errorResponse('Not found', 404);
}

// ─────────────────────────────────────────
// Tools API
// ─────────────────────────────────────────
async function handleTools(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);
  const userId = await getUserFromSession(request, env);

  if (request.method === 'GET' && url.pathname === '/api/tools') {
    const { results } = await env.DB.prepare('SELECT * FROM tools ORDER BY created_at DESC').all();
    return jsonResponse({ tools: results });
  }

  if (request.method === 'GET' && url.pathname.startsWith('/api/tools/')) {
    const slug = url.pathname.split('/')[3];
    const tool = await env.DB.prepare('SELECT * FROM tools WHERE slug = ?').bind(slug).first();
    if (!tool) return errorResponse('Tool not found', 404);
    return jsonResponse({ tool });
  }

  if (request.method === 'POST' && url.pathname === '/api/tools') {
    if (!userId) return errorResponse('Unauthorized', 401);
    const body = await request.json();
    const { name, category, description, website, price, tags } = body;
    if (!name || !category) return errorResponse('name and category required', 400);
    const id = generateId();
    const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    const now = Date.now();
    await env.DB.prepare('INSERT INTO tools (id, slug, name, category, description, website, price, tags, submitted_by, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
      .bind(id, slug, name, category, description || '', website || '', JSON.stringify(tags || []), userId, now, now).run();
    return jsonResponse({ tool: { id, slug, name } }, 201);
  }

  return errorResponse('Not found', 404);
}

// ─────────────────────────────────────────
// Kits API
// ─────────────────────────────────────────
async function handleKits(request: Request, env: Env): Promise<Response> {
  const url = new URL(request.url);

  if (request.method === 'GET' && url.pathname === '/api/kits') {
    const { results } = await env.DB.prepare('SELECT * FROM kits ORDER BY created_at DESC').all();
    return jsonResponse({ kits: results });
  }

  if (request.method === 'GET' && url.pathname.startsWith('/api/kits/')) {
    const slug = url.pathname.split('/')[3];
    const kit = await env.DB.prepare('SELECT * FROM kits WHERE slug = ?').bind(slug).first();
    if (!kit) return errorResponse('Kit not found', 404);
    const tools = await env.DB.prepare('SELECT t.* FROM tools t JOIN kit_tools kt ON t.id = kt.tool_id WHERE kt.kit_id = ?').bind((kit as any).id).all();
    return jsonResponse({ kit, tools: tools.results });
  }

  return errorResponse('Not found', 404);
}

// ─────────────────────────────────────────
// Dashboard Stats
// ─────────────────────────────────────────
async function handleDashboard(request: Request, env: Env): Promise<Response> {
  const userId = await getUserFromSession(request, env);
  if (!userId) return errorResponse('Unauthorized', 401);

  const [tools, kits, reviews] = await Promise.all([
    env.DB.prepare('SELECT COUNT(*) as count FROM tools WHERE submitted_by = ?').bind(userId).first(),
    env.DB.prepare('SELECT COUNT(*) as count FROM kits WHERE submitted_by = ?').bind(userId).first(),
    env.DB.prepare('SELECT COUNT(*) as count FROM reviews WHERE user_id = ?').bind(userId).first(),
  ]);

  return jsonResponse({
    stats: {
      tools: (tools as any)?.count || 0,
      kits: (kits as any)?.count || 0,
      reviews: (reviews as any)?.count || 0,
    },
  });
}

// ─────────────────────────────────────────
// Router
// ─────────────────────────────────────────
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          ...JSON_HEADERS,
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      });
    }

    try {
      if (pathname.startsWith('/api/auth/')) return handleAuth(request, env);
      if (pathname.startsWith('/api/tools')) return handleTools(request, env);
      if (pathname.startsWith('/api/kits')) return handleKits(request, env);
      if (pathname === '/api/dashboard/stats') return handleDashboard(request, env);
      if (pathname === '/api/health') return jsonResponse({ status: 'ok', ts: Date.now() });
      return errorResponse('Not found', 404);
    } catch (e: any) {
      return errorResponse(e.message || 'Internal error', 500);
    }
  },
};
