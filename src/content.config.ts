import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: ({ image }) =>
    z.object({
      isDraft: z.boolean(),
      title: z.string(),
      description: z.string().min(40),
      sortOrder: z.number(),
      image: z.object({
        src: image(),
        alt: z.string(),
        srcset: z.string().optional(),
      }),
      author: z.string().default("Anonymous"),
      authorPossion: z.string().optional(),
      language: z.enum(["en", "es"]),
      tags: z.array(z.string()),
      footnote: z.string().optional(),
      publishDate: z.date(),
      canonicalURL: z.string().url(),
    }),
});

const workCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/works" }),
  schema: z.object({
    slug: z.string(),
    isDraft: z.boolean(),
    title: z.string(),
    shorttitle: z.string(),
    description: z.string().min(40),
    keyWords: z.array(z.string()),
    sortOrder: z.number(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      // srcset: z.string().optional(),
    }),
    author: z.string().default("Anonymous"),
    language: z.enum(["en", "es"]),
    tags: z.array(z.string()),
    footnote: z.string().optional(),
    publishDate: z.date(),
    authorContact: z.string().email(),
    canonicalURL: z.string().url(),
  }),
});

const serviceCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string().min(40),
    icon: z.string(),
    keyWords: z.array(z.string()),
    sortOrder: z.number(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      srcset: z.string().optional(),
    }),
    publishDate: z.date(),
    canonicalURL: z.string().url(),
  }),
});

const technologyCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/technologies" }),
  schema: z.object({
    isDraft: z.boolean(),
    title: z.string(),
    description: z.string().min(40),
    sortOrder: z.number(),
    isPartner: z.boolean(),
    isClient: z.boolean(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
      srcset: z.string().optional(),
    }),
    publishDate: z.date(),
    canonicalURL: z.string().url(),
  }),
});

const legalCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    title: z.string(),
    description: z.string().min(40),
    publishDate: z.date(),
    updatedDate: z.date(),
    canonicalURL: z.string().url(),
  }),
});

export const collections = {
  blog: blogCollection,
  works: workCollection,
  services: serviceCollection,
  technologies: technologyCollection,
  legal: legalCollection,
};
