#!/usr/bin/env node
/**
 * Seed D1 database with MCP servers, AI tools, deployment tools, and kits
 * Matches the actual D1 schema (not the schema.sql)
 */

import { readFileSync, readdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');

function parseFrontmatterContent(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return { data: {}, content: content };
  
  const frontmatterStr = match[1];
  const body = match[2];
  const data = {};
  
  for (const line of frontmatterStr.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;
    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();
    
    if ((value.startsWith('"') && value.endsWith('"')) || 
        (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    
    if (value.startsWith('[') && value.endsWith(']')) {
      const inner = value.slice(1, -1);
      data[key] = inner.split(',').map(v => {
        v = v.trim();
        if ((v.startsWith('"') && v.endsWith('"')) || 
            (v.startsWith("'") && v.endsWith("'"))) {
          v = v.slice(1, -1);
        }
        return v.trim();
      });
    } else {
      data[key] = value;
    }
  }
  
  return { data, content: body };
}

function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

function generateId() {
  return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, () => 
    Math.floor(Math.random() * 16).toString(16)
  );
}

function escapeForSQL(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/'/g, "''");
}

function arrayToJSON(arr) {
  if (!Array.isArray(arr)) return '';
  return JSON.stringify(arr);
}

function stringify(val) {
  if (typeof val === 'object' && val !== null) {
    return escapeForSQL(JSON.stringify(val));
  }
  return escapeForSQL(String(val || ''));
}

async function seedTools() {
  const baseDir = join(rootDir, 'src/content');
  const collections = [
    { dir: 'mcp-servers', category: 'mcp-servers' },
    { dir: 'ai-tools', category: 'ai-tools' },
    { dir: 'deployment', category: 'deployment' },
  ];
  
  const now = Math.floor(Date.now() / 1000);
  const statements = [];
  
  for (const col of collections) {
    const dir = join(baseDir, col.dir);
    const files = readdirSync(dir).filter(f => f.endsWith('.md'));
    
    console.error(`Processing ${files.length} ${col.dir} files...`);
    
    for (const file of files) {
      try {
        const content = readFileSync(join(dir, file), 'utf-8');
        const { data } = parseFrontmatterContent(content);
        
        const id = generateId();
        const name = data.name || data.title || file.replace('.md', '');
        const slug = data.slug || slugify(name);
        const description = escapeForSQL(data.description || '');
        const website = data.website || '';
        const logo = data.logo || '';
        const price = data.price || 'free';
        const tags = arrayToJSON(Array.isArray(data.tags) ? data.tags : []);
        const featured = data.featured ? 1 : 0;
        
        const submittedAt = data.submittedAt 
          ? Math.floor(new Date(data.submittedAt).getTime() / 1000)
          : now;
        
        const sql = `INSERT INTO tools (id, name, slug, category, tags, price, website, logo, description, featured, created_at, updated_at) VALUES ('${id}', '${escapeForSQL(name)}', '${slug}', '${col.category}', '${tags}', '${price}', '${escapeForSQL(website)}', '${escapeForSQL(logo)}', '${description}', ${featured}, ${submittedAt}, ${now}) ON CONFLICT(slug) DO UPDATE SET name=excluded.name, description=excluded.description, updated_at=excluded.updated_at;`;
        
        statements.push(sql);
      } catch (e) {
        console.error(`Error processing ${file}: ${e.message}`);
      }
    }
  }
  
  // Seed kits
  const kitsDir = join(baseDir, 'kits');
  const kitFiles = readdirSync(kitsDir).filter(f => f.endsWith('.md'));
  
  console.error(`Processing ${kitFiles.length} kit files...`);
  
  for (const file of kitFiles) {
    try {
      const content = readFileSync(join(kitsDir, file), 'utf-8');
      const { data } = parseFrontmatterContent(content);
      
      const id = generateId();
      const name = data.name || data.title || file.replace('.md', '');
      const slug = data.slug || slugify(name);
      const description = escapeForSQL(data.description || '');
      const tagline = stringify(data.tagline || name);
      const icon = data.icon || '';
      const color = data.color || '#8B5CF6';
      const featured = data.featured ? 1 : 0;
      
      const sql = `INSERT INTO kits (id, name, slug, tagline, description, icon, color, featured, created_at, updated_at) VALUES ('${id}', '${escapeForSQL(name)}', '${slug}', '${tagline}', '${description}', '${escapeForSQL(icon)}', '${escapeForSQL(color)}', ${featured}, ${now}, ${now}) ON CONFLICT(slug) DO UPDATE SET name=excluded.name, tagline=excluded.tagline, description=excluded.description, updated_at=excluded.updated_at;`;
      
      statements.push(sql);
    } catch (e) {
      console.error(`Error processing kit ${file}: ${e.message}`);
    }
  }
  
  console.log(statements.join('\n'));
}

seedTools().catch(console.error);
