import { defineCollection, z } from "astro:content";

const portfolioCollection = defineCollection({
  schema: ({ image }) => 
  z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    gif: image(),
    coverPhoto: image(),
  }),
});

export const collections = {
  projects: portfolioCollection,
};

// import { z, defineCollection } from 'astro:content';

// const posts = defineCollection({
//   type: 'content', 
//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()).optional(),
//     image: z.string().optional(),
//     duration: z.string().optional(),
//     date: z.string().optional(),
//     pitch: z.string().optional()
//   }),
// });

// export const collections = { posts };