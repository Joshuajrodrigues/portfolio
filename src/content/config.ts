import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		defaultColor:z.string(),
		title: z.string(),
		desp: z.string(),
		tags:z.array(z.string()),
		visit: z.string(),
		git:z.string(),
		image: z.string(),
	}),
});
export const collections = { blog,projects };
