import { z } from 'zod'

export const elementSchema = z.object({
  title: z.string(),
  published_date: z.string().transform((date) => new Date(date)),
  views: z.number().int().optional(),
  published: z.boolean(),
})

export const elementsResultSchema = z.array(elementSchema)

// This will make all fields optional
// the functionality is deprecated but we only need the type
export type Element = z.infer<ReturnType<typeof elementSchema.deepPartial>>

export type PaginatedResponse<T> = {
  next: string | null
  previous: string | null
  results: T
}
