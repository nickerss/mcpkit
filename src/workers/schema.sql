-- MCPKIT v3.0 D1 Schema
-- Based on ARCH.md v3.0

-- =====================
-- CORE TABLES
-- =====================

-- Users (GitHub OAuth)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  github_id TEXT UNIQUE NOT NULL,
  email TEXT,
  name TEXT,
  avatar_url TEXT,
  subscription_tier TEXT DEFAULT 'free' CHECK(subscription_tier IN ('free', 'pro', 'enterprise')),
  stripe_customer_id TEXT,
  created_at INTEGER NOT NULL
);

-- Tools registry
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT,
  subcategory TEXT,
  tags TEXT,  -- JSON array
  price TEXT DEFAULT 'free' CHECK(price IN ('free', 'freemium', 'paid')),
  website TEXT,
  logo_url TEXT,
  description TEXT,
  scenarios TEXT,  -- JSON array
  install_command TEXT,
  config_example TEXT,
  quality_score INTEGER DEFAULT 0,
  risk_level TEXT DEFAULT 'none' CHECK(risk_level IN ('none', 'low', 'medium', 'high')),
  owner_id TEXT REFERENCES users(id),
  promoted_until INTEGER,
  featured INTEGER DEFAULT 0,
  certified INTEGER DEFAULT 0,
  github_stars INTEGER DEFAULT 0,
  last_updated INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Kits (tool bundles)
CREATE TABLE IF NOT EXISTS kits (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  description TEXT,
  category TEXT,
  owner_id TEXT REFERENCES users(id),
  is_paid INTEGER DEFAULT 0,
  price_cents INTEGER,
  quality_score INTEGER DEFAULT 0,
  certified INTEGER DEFAULT 0,
  status TEXT DEFAULT 'draft' CHECK(status IN ('draft', 'pending', 'approved', 'published')),
  stripe_connect_account_id TEXT,
  github_stars INTEGER DEFAULT 0,
  integration_count INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Kit-Tool junction (many-to-many)
CREATE TABLE IF NOT EXISTS kit_tools (
  kit_id TEXT REFERENCES kits(id) ON DELETE CASCADE,
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'primary' CHECK(role IN ('primary', 'secondary', 'optional')),
  config_overrides TEXT,  -- JSON
  display_order INTEGER DEFAULT 0,
  PRIMARY KEY (kit_id, tool_id)
);

-- Reviews (for tools AND kits)
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  tool_id TEXT REFERENCES tools(id) ON DELETE SET NULL,
  kit_id TEXT REFERENCES kits(id) ON DELETE SET NULL,
  user_id TEXT REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER NOT NULL CHECK(rating >= 1 AND rating <= 5),
  content TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- =====================
-- COMMERCE TABLES
-- =====================

-- Subscriptions
CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  user_id TEXT UNIQUE NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stripe_subscription_id TEXT,
  tier TEXT DEFAULT 'free' CHECK(tier IN ('free', 'pro', 'enterprise')),
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'canceled', 'past_due', 'trialing')),
  current_period_end INTEGER,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Ad Campaigns
CREATE TABLE IF NOT EXISTS ad_campaigns (
  id TEXT PRIMARY KEY,
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  user_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK(type IN ('cpc', 'top', 'featured')),
  bid_amount_cents INTEGER DEFAULT 0,
  daily_budget_cents INTEGER DEFAULT 0,
  total_budget_cents INTEGER,
  status TEXT DEFAULT 'active' CHECK(status IN ('active', 'paused', 'exhausted', 'ended')),
  started_at INTEGER,
  ended_at INTEGER,
  created_at INTEGER NOT NULL
);

-- Ad Impressions log (for deduplication)
CREATE TABLE IF NOT EXISTS ad_impressions (
  id TEXT PRIMARY KEY,
  campaign_id TEXT NOT NULL REFERENCES ad_campaigns(id) ON DELETE CASCADE,
  tool_id TEXT NOT NULL,
  ip_hash TEXT,  -- for deduplication
  clicked_at INTEGER,
  created_at INTEGER NOT NULL
);

-- Kit Purchases
CREATE TABLE IF NOT EXISTS purchases (
  id TEXT PRIMARY KEY,
  kit_id TEXT NOT NULL REFERENCES kits(id) ON DELETE CASCADE,
  buyer_id TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  stripe_payment_intent_id TEXT,
  amount_cents INTEGER NOT NULL,
  platform_fee_cents INTEGER,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'completed', 'refunded', 'disputed')),
  purchased_at INTEGER NOT NULL
);

-- =====================
-- SECURITY TABLES
-- =====================

-- Security Reports
CREATE TABLE IF NOT EXISTS security_reports (
  id TEXT PRIMARY KEY,
  tool_id TEXT NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  scanned_at INTEGER NOT NULL,
  risk_level TEXT DEFAULT 'none' CHECK(risk_level IN ('none', 'low', 'medium', 'high')),
  vulnerabilities TEXT,  -- JSON array
  report_url TEXT,
  created_at INTEGER NOT NULL
);

-- =====================
-- KIT SUBMISSION WORKFLOW
-- =====================

CREATE TABLE IF NOT EXISTS kit_submissions (
  id TEXT PRIMARY KEY,
  kit_id TEXT REFERENCES kits(id) ON DELETE SET NULL,
  submitted_by TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  status TEXT DEFAULT 'pending' CHECK(status IN ('pending', 'approved', 'rejected', 'revision_requested')),
  reviewer_id TEXT REFERENCES users(id),
  review_notes TEXT,
  submitted_at INTEGER NOT NULL,
  reviewed_at INTEGER
);

-- =====================
-- INDEXES
-- =====================

CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_tools_slug ON tools(slug);
CREATE INDEX IF NOT EXISTS idx_tools_quality ON tools(quality_score DESC);
CREATE INDEX IF NOT EXISTS idx_tools_certified ON tools(certified) WHERE certified = 1;
CREATE INDEX IF NOT EXISTS idx_tools_owner ON tools(owner_id);

CREATE INDEX IF NOT EXISTS idx_kits_slug ON kits(slug);
CREATE INDEX IF NOT EXISTS idx_kits_status ON kits(status);
CREATE INDEX IF NOT EXISTS idx_kits_owner ON kits(owner_id);

CREATE INDEX IF NOT EXISTS idx_reviews_tool ON reviews(tool_id);
CREATE INDEX IF NOT EXISTS idx_reviews_kit ON reviews(kit_id);
CREATE INDEX IF NOT EXISTS idx_reviews_user ON reviews(user_id);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating DESC);

CREATE INDEX IF NOT EXISTS idx_subscriptions_user ON subscriptions(user_id);
CREATE INDEX IF NOT EXISTS idx_subscriptions_stripe ON subscriptions(stripe_subscription_id);

CREATE INDEX IF NOT EXISTS idx_purchases_kit ON purchases(kit_id);
CREATE INDEX IF NOT EXISTS idx_purchases_buyer ON purchases(buyer_id);

CREATE INDEX IF NOT EXISTS idx_security_reports_tool ON security_reports(tool_id);
CREATE INDEX IF NOT EXISTS idx_security_reports_risk ON security_reports(risk_level);
