-- MCPKIT v3.0 Database Schema
-- D1 Compatible SQL

-- Users (developers)
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  github_id TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  email TEXT,
  avatar_url TEXT,
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Kits (collections of MCP tools)
CREATE TABLE IF NOT EXISTS kits (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  icon TEXT,
  color TEXT,
  featured INTEGER DEFAULT 0,
  submitted_by TEXT REFERENCES users(id),
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Tools (MCP servers/tools)
CREATE TABLE IF NOT EXISTS tools (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  subcategory TEXT,
  tags TEXT,
  price TEXT,
  website TEXT,
  logo TEXT,
  description TEXT,
  install_command TEXT,
  env_vars TEXT,
  config_example TEXT,
  featured INTEGER DEFAULT 0,
  submitted_by TEXT REFERENCES users(id),
  created_at INTEGER NOT NULL,
  updated_at INTEGER NOT NULL
);

-- Kit <-> Tool relationship
CREATE TABLE IF NOT EXISTS kit_tools (
  kit_id TEXT REFERENCES kits(id) ON DELETE CASCADE,
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'secondary',
  PRIMARY KEY (kit_id, tool_id)
);

-- Reviews
CREATE TABLE IF NOT EXISTS reviews (
  id TEXT PRIMARY KEY,
  tool_id TEXT REFERENCES tools(id) ON DELETE CASCADE,
  user_id TEXT REFERENCES users(id),
  rating INTEGER NOT NULL,
  comment TEXT,
  created_at INTEGER NOT NULL
);

-- Subscriptions (newsletter)
CREATE TABLE IF NOT EXISTS subscriptions (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at INTEGER NOT NULL
);

-- Ad campaigns
CREATE TABLE IF NOT EXISTS ad_campaigns (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  kit_id TEXT REFERENCES kits(id),
  budget REAL DEFAULT 0,
  status TEXT DEFAULT 'active',
  created_at INTEGER NOT NULL
);

-- Ad impressions
CREATE TABLE IF NOT EXISTS ad_impressions (
  id TEXT PRIMARY KEY,
  campaign_id TEXT REFERENCES ad_campaigns(id),
  clicked INTEGER DEFAULT 0,
  created_at INTEGER NOT NULL
);

-- Purchases
CREATE TABLE IF NOT EXISTS purchases (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  kit_id TEXT REFERENCES kits(id),
  stripe_session_id TEXT,
  amount REAL,
  status TEXT DEFAULT 'pending',
  created_at INTEGER NOT NULL
);

-- Security reports
CREATE TABLE IF NOT EXISTS security_reports (
  id TEXT PRIMARY KEY,
  tool_id TEXT REFERENCES tools(id),
  reporter_id TEXT REFERENCES users(id),
  severity TEXT,
  status TEXT DEFAULT 'open',
  description TEXT,
  created_at INTEGER NOT NULL,
  resolved_at INTEGER
);

-- Kit submissions (new kit proposals)
CREATE TABLE IF NOT EXISTS kit_submissions (
  id TEXT PRIMARY KEY,
  submitter_id TEXT REFERENCES users(id),
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'pending',
  submitted_at INTEGER NOT NULL,
  reviewed_at INTEGER
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_tools_category ON tools(category);
CREATE INDEX IF NOT EXISTS idx_tools_featured ON tools(featured);
CREATE INDEX IF NOT EXISTS idx_kits_featured ON kits(featured);
CREATE INDEX IF NOT EXISTS idx_reviews_tool_id ON reviews(tool_id);
