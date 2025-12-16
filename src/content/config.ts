// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Define a `type` and `schema` for each collection
const graphicsCollection = defineCollection({
  type: 'content', // v2.5.0 and later
  schema: z.object({
    path: z.string(),
    desc: z.string(),
    type: z.string(),
    title: z.string(),
  }),
});

const interfacesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    path: z.string(),
    desc: z.string(),
    tech: z.string(),
    title: z.string(),
    link: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'graphics': graphicsCollection,
  'interfaces': interfacesCollection,
};