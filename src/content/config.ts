import { defineCollection, z } from "astro:content"; // z -> zod schema

const degreesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        duration: z.string(),
        modality: z.string(),
        image: z.string(),
        pdf: z.string(),
    })
})

const infoCollection = defineCollection({
    schema: z.object({
        title: z.string()
    })
})

const communityCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        keywords: z.string(),
        date: z.date(),
        category: z.string(),
        tags: z.string(),
    })
})

export const collections = { 
    degrees: degreesCollection,
    information: infoCollection,
    community: communityCollection,
}