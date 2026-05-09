declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"ai-tools": {
"aider.md": {
	id: "aider.md";
  slug: "aider";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"bolt-new.md": {
	id: "bolt-new.md";
  slug: "bolt-new";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"buildt.md": {
	id: "buildt.md";
  slug: "buildt";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"claude-code.md": {
	id: "claude-code.md";
  slug: "claude-code";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"cline.md": {
	id: "cline.md";
  slug: "cline";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"coderabbit.md": {
	id: "coderabbit.md";
  slug: "coderabbit";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"cody.md": {
	id: "cody.md";
  slug: "cody";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"continue.md": {
	id: "continue.md";
  slug: "continue";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"cursor-composer.md": {
	id: "cursor-composer.md";
  slug: "cursor-composer";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"cursor-rules.md": {
	id: "cursor-rules.md";
  slug: "cursor-rules";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"cursor.md": {
	id: "cursor.md";
  slug: "cursor";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"devin.md": {
	id: "devin.md";
  slug: "devin";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"figma-ai.md": {
	id: "figma-ai.md";
  slug: "figma-ai";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"github-copilot-cli.md": {
	id: "github-copilot-cli.md";
  slug: "github-copilot-cli";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"github-copilot-workspace.md": {
	id: "github-copilot-workspace.md";
  slug: "github-copilot-workspace";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"github-copilot.md": {
	id: "github-copilot.md";
  slug: "github-copilot";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"jetbrains-ai-assistant.md": {
	id: "jetbrains-ai-assistant.md";
  slug: "jetbrains-ai-assistant";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"kadoa.md": {
	id: "kadoa.md";
  slug: "kadoa";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"lovable.md": {
	id: "lovable.md";
  slug: "lovable";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"mintlify.md": {
	id: "mintlify.md";
  slug: "mintlify";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"opencode.md": {
	id: "opencode.md";
  slug: "opencode";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"replit-agent.md": {
	id: "replit-agent.md";
  slug: "replit-agent";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"safurai.md": {
	id: "safurai.md";
  slug: "safurai";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"socode.md": {
	id: "socode.md";
  slug: "socode";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"stackspot.md": {
	id: "stackspot.md";
  slug: "stackspot";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"stoplight.md": {
	id: "stoplight.md";
  slug: "stoplight";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"supermaven.md": {
	id: "supermaven.md";
  slug: "supermaven";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"tanuki.md": {
	id: "tanuki.md";
  slug: "tanuki";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"v0.md": {
	id: "v0.md";
  slug: "v0";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
"windsurf.md": {
	id: "windsurf.md";
  slug: "windsurf";
  body: string;
  collection: "ai-tools";
  data: InferEntrySchema<"ai-tools">
} & { render(): Render[".md"] };
};
"deployment": {
"autogen.md": {
	id: "autogen.md";
  slug: "autogen";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"autogpt.md": {
	id: "autogpt.md";
  slug: "autogpt";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"aws-amplify.md": {
	id: "aws-amplify.md";
  slug: "aws-amplify";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"cloudflare-pages.md": {
	id: "cloudflare-pages.md";
  slug: "cloudflare-pages";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"cloudflare-workers.md": {
	id: "cloudflare-workers.md";
  slug: "cloudflare-workers";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"crewai.md": {
	id: "crewai.md";
  slug: "crewai";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"deno-deploy.md": {
	id: "deno-deploy.md";
  slug: "deno-deploy";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"dify.md": {
	id: "dify.md";
  slug: "dify";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"flowise.md": {
	id: "flowise.md";
  slug: "flowise";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"fly-io.md": {
	id: "fly-io.md";
  slug: "fly-io";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"langchain.md": {
	id: "langchain.md";
  slug: "langchain";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"lemonsqueezy.md": {
	id: "lemonsqueezy.md";
  slug: "lemonsqueezy";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"llamaindex.md": {
	id: "llamaindex.md";
  slug: "llamaindex";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"mailgun.md": {
	id: "mailgun.md";
  slug: "mailgun";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"mongodb-atlas.md": {
	id: "mongodb-atlas.md";
  slug: "mongodb-atlas";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"n8n.md": {
	id: "n8n.md";
  slug: "n8n";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"neon.md": {
	id: "neon.md";
  slug: "neon";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"netlify.md": {
	id: "netlify.md";
  slug: "netlify";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"planetscale.md": {
	id: "planetscale.md";
  slug: "planetscale";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"postmark.md": {
	id: "postmark.md";
  slug: "postmark";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"railway.md": {
	id: "railway.md";
  slug: "railway";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"redis-cloud.md": {
	id: "redis-cloud.md";
  slug: "redis-cloud";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"render.md": {
	id: "render.md";
  slug: "render";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"replit.md": {
	id: "replit.md";
  slug: "replit";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"resend.md": {
	id: "resend.md";
  slug: "resend";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"stripe.md": {
	id: "stripe.md";
  slug: "stripe";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"supabase.md": {
	id: "supabase.md";
  slug: "supabase";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"surge.md": {
	id: "surge.md";
  slug: "surge";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"vercel.md": {
	id: "vercel.md";
  slug: "vercel";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
"zeabur.md": {
	id: "zeabur.md";
  slug: "zeabur";
  body: string;
  collection: "deployment";
  data: InferEntrySchema<"deployment">
} & { render(): Render[".md"] };
};
"mcp-servers": {
"brave-search-mcp.md": {
	id: "brave-search-mcp.md";
  slug: "brave-search-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"browserbase-mcp.md": {
	id: "browserbase-mcp.md";
  slug: "browserbase-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"cline-mcp.md": {
	id: "cline-mcp.md";
  slug: "cline-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"cloudflare-r2-mcp.md": {
	id: "cloudflare-r2-mcp.md";
  slug: "cloudflare-r2-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"context7-mcp.md": {
	id: "context7-mcp.md";
  slug: "context7-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"groq-mcp.md": {
	id: "groq-mcp.md";
  slug: "groq-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-anthropic.md": {
	id: "mcp-anthropic.md";
  slug: "mcp-anthropic";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-aws-s3.md": {
	id: "mcp-aws-s3.md";
  slug: "mcp-aws-s3";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-bunny.md": {
	id: "mcp-bunny.md";
  slug: "mcp-bunny";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-codeanalysis.md": {
	id: "mcp-codeanalysis.md";
  slug: "mcp-codeanalysis";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-discord.md": {
	id: "mcp-discord.md";
  slug: "mcp-discord";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-docker.md": {
	id: "mcp-docker.md";
  slug: "mcp-docker";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-dropbox.md": {
	id: "mcp-dropbox.md";
  slug: "mcp-dropbox";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-elasticsearch.md": {
	id: "mcp-elasticsearch.md";
  slug: "mcp-elasticsearch";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-everart.md": {
	id: "mcp-everart.md";
  slug: "mcp-everart";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-fetch.md": {
	id: "mcp-fetch.md";
  slug: "mcp-fetch";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-filesystem.md": {
	id: "mcp-filesystem.md";
  slug: "mcp-filesystem";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-firecrawl.md": {
	id: "mcp-firecrawl.md";
  slug: "mcp-firecrawl";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-gdrive.md": {
	id: "mcp-gdrive.md";
  slug: "mcp-gdrive";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-git.md": {
	id: "mcp-git.md";
  slug: "mcp-git";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-github.md": {
	id: "mcp-github.md";
  slug: "mcp-github";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-gitlab.md": {
	id: "mcp-gitlab.md";
  slug: "mcp-gitlab";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-google-ai.md": {
	id: "mcp-google-ai.md";
  slug: "mcp-google-ai";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-grafana.md": {
	id: "mcp-grafana.md";
  slug: "mcp-grafana";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-jina.md": {
	id: "mcp-jina.md";
  slug: "mcp-jina";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-lark.md": {
	id: "mcp-lark.md";
  slug: "mcp-lark";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-lemonsqueezy.md": {
	id: "mcp-lemonsqueezy.md";
  slug: "mcp-lemonsqueezy";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-minimax.md": {
	id: "mcp-minimax.md";
  slug: "mcp-minimax";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-mongodb.md": {
	id: "mcp-mongodb.md";
  slug: "mcp-mongodb";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-notion.md": {
	id: "mcp-notion.md";
  slug: "mcp-notion";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-npm.md": {
	id: "mcp-npm.md";
  slug: "mcp-npm";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-ollama.md": {
	id: "mcp-ollama.md";
  slug: "mcp-ollama";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-openai.md": {
	id: "mcp-openai.md";
  slug: "mcp-openai";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-paddle.md": {
	id: "mcp-paddle.md";
  slug: "mcp-paddle";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-paypal.md": {
	id: "mcp-paypal.md";
  slug: "mcp-paypal";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-perplexity.md": {
	id: "mcp-perplexity.md";
  slug: "mcp-perplexity";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-postgres.md": {
	id: "mcp-postgres.md";
  slug: "mcp-postgres";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-read.md": {
	id: "mcp-read.md";
  slug: "mcp-read";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-redis.md": {
	id: "mcp-redis.md";
  slug: "mcp-redis";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-search.md": {
	id: "mcp-search.md";
  slug: "mcp-search";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-sentry.md": {
	id: "mcp-sentry.md";
  slug: "mcp-sentry";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-sequential-thinking.md": {
	id: "mcp-sequential-thinking.md";
  slug: "mcp-sequential-thinking";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-shell.md": {
	id: "mcp-shell.md";
  slug: "mcp-shell";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-slack.md": {
	id: "mcp-slack.md";
  slug: "mcp-slack";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-sqlite.md": {
	id: "mcp-sqlite.md";
  slug: "mcp-sqlite";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-stripe.md": {
	id: "mcp-stripe.md";
  slug: "mcp-stripe";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-telegram.md": {
	id: "mcp-telegram.md";
  slug: "mcp-telegram";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"mcp-whatsapp.md": {
	id: "mcp-whatsapp.md";
  slug: "mcp-whatsapp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"neon-mcp.md": {
	id: "neon-mcp.md";
  slug: "neon-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"planetscale-mcp.md": {
	id: "planetscale-mcp.md";
  slug: "planetscale-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
"supabase-mcp.md": {
	id: "supabase-mcp.md";
  slug: "supabase-mcp";
  body: string;
  collection: "mcp-servers";
  data: InferEntrySchema<"mcp-servers">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
