import { defineCollection, z } from 'astro:content';

const evaluationSchema = z.object({
  easeOfUse: z.number().min(1).max(5),
  security: z.number().min(1).max(5),
  activity: z.number().min(1).max(5),
  scenarioFit: z.number().min(1).max(5),
  overall: z.number().optional(),
});

const toolSchema = z.object({
  title: z.string(),
  name: z.string(),
  category: z.string(),
  subcategory: z.string().optional(),
  tags: z.array(z.string()),
  price: z.string(),
  website: z.string(),
  logo: z.string().nullable(),
  description: z.string(),
  scenarios: z.array(z.string()).optional(),
  installCommand: z.string().optional(),
  envVars: z.array(z.string()).optional(),
  configExample: z.string().optional(),
  relatedTools: z.array(z.string()).optional(),
  featured: z.boolean().default(false),
  submittedAt: z.string(),
  // v2.0 fields
  kit: z.array(z.string()).optional(),
  kitRole: z.string().optional(),
  evaluation: evaluationSchema.optional(),
  certificationStatus: z.enum(['pending', 'reviewed', 'recommended', 'certified']).optional(),
});

const mcpServers = defineCollection({
  type: 'content',
  schema: toolSchema,
});

const aiTools = defineCollection({
  type: 'content',
  schema: toolSchema,
});

const deployment = defineCollection({
  type: 'content',
  schema: toolSchema,
});

const kits = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    name: z.string(),
    icon: z.string(),
    color: z.string(),
    description: z.string(),
    levels: z.object({
      starter: z.object({
        description: z.string(),
        tools: z.array(z.string()),
      }),
      pro: z.object({
        description: z.string(),
        tools: z.array(z.string()),
      }),
      enterprise: z.object({
        description: z.string(),
        tools: z.array(z.string()),
      }),
    }),
    featuredTools: z.array(z.string()).optional(),
    tagline: z.string().optional(),
    pros: z.array(z.string()).optional(),
    cons: z.array(z.string()).optional(),
    targetAudience: z.string().optional(),
  }),
});

export const collections = {
  'mcp-servers': mcpServers,
  'ai-tools': aiTools,
  'deployment': deployment,
  'kits': kits,
};