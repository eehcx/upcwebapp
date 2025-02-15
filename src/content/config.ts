import { defineCollection, z } from "astro:content"; // z -> zod schema

const degreesCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        duration: z.string(),
        modality: z.string(),
        image: z.string(),
    })
})

const infoCollection = defineCollection({
    schema: z.object({
        title: z.string()
    })
})

export const collections = { 
    degrees: degreesCollection,
    info: infoCollection,
}