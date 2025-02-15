import { z } from 'zod'

export const typeSchema = z.union([z.literal('INCOME'), z.literal('EXPENSE')])

export type Type = z.infer<typeof typeSchema>
