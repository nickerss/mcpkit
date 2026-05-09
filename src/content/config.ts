import { defineCollection, z } from 'astro:content';

const mcpServers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    name: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()),
    price: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    scenarios: z.array(z.string()).optional(),
    installCommand: z.string().optional(),
    config: z.string().optional(),
    relatedTools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    submittedAt: z.string(),
  }),
});

const aiTools = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    name: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()),
    price: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    scenarios: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    submittedAt: z.string(),
  }),
});

const deployment = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    name: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    tags: z.array(z.string()),
    price: z.string(),
    website: z.string(),
    logo: z.string().optional(),
    description: z.string(),
    scenarios: z.array(z.string()).optional(),
    relatedTools: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
    submittedAt: z.string(),
  }),
});

export const collections = {
  'mcp-servers': mcpServers,
  'ai-tools': aiTools,
  'deployment': deployment,
};
