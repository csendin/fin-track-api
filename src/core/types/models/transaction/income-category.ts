import { z } from 'zod'

export const incomeCategorySchema = z.union([
    z.literal('SALARY'),
    z.literal('EXTRA'),
    z.literal('INVESTMENT'),
    z.literal('RENTAL'),
    z.literal('GIFT'),
    z.literal('REIMBURSEMENT'),
    z.literal('OTHER'),
])

export type IncomeCategory = z.infer<typeof incomeCategorySchema>
