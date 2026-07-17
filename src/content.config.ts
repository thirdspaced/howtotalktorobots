import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const library = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/library' }),
  schema: z.object({
    title: z.string(), // phrased as a question or outcome
    description: z.string(), // meta description + card blurb
    topics: z.array(z.string()).default([]),
    domains: z
      .array(z.enum(['teachers', 'parents', 'business', 'students', 'everyone']))
      .default(['everyone']),
    type: z.enum(['guide', 'prompt', 'framework', 'tool']),
    prompt: z.string().optional(), // copy-paste block shown with a copy button
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('how to talk to robots'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    author: z.string().default('Amanda Grutza'),
    tags: z.array(z.string()).default([]),
    heroAlt: z.string().optional(),
    draft: z.boolean().default(false),
    canonical: z.string().optional(),
  }),
});

export const collections = { library, blog };
