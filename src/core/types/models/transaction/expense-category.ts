import { z } from 'zod'

export const expenseCategorySchema = z.union([
    z.literal('HOUSING'),
    z.literal('FOOD'),
    z.literal('TRANSPORT'),
    z.literal('HEALTH'),
    z.literal('LEISURE'),
    z.literal('EDUCATION'),
    z.literal('CLOTHING'),
    z.literal('DEBT'),
    z.literal('INVESTMENT'),
    z.literal('DONATION'),
    z.literal('INSURANCE'),
    z.literal('PET'),
    z.literal('GIFT'),
    z.literal('TAX'),
    z.literal('OTHER'),
])

export type ExpenseCategory = z.infer<typeof expenseCategorySchema>
