import { z } from 'zod'

export const categorySchema = z.union([
    z.literal('FOOD'),
    z.literal('LEISURE'),
    z.literal('EDUCATION'),
    z.literal('CLOTHING'),
    z.literal('PET'),
    z.literal('GIFT'),
    z.literal('OTHER'),
])

export type Category = z.infer<typeof categorySchema>
