import { z } from 'zod'

export const periodSchema = z.union([
    z.literal('DAILY'),
    z.literal('WEEKLY'),
    z.literal('MONTHLY'),
    z.literal('QUARTERLY'),
    z.literal('YEARLY'),
])

export type PeriodSchema = z.infer<typeof periodSchema>
