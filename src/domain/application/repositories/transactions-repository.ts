// import { ExpenseCategory } from '@/core/types/models/transaction/expense-category'
// import { IncomeCategory } from '@/core/types/models/transaction/income-category'
// import { Type } from '@/core/types/models/transaction/type'
import { Transaction } from '@/domain/enterprise/entities/transaction'

export interface TransactionsRepository {
    findById(id: string): Promise<Transaction | null>
    findMany(): Promise<Transaction[]>
    findByUserId(userId: number): Promise<Transaction[]>
    // findByType(type: Type): Promise<Transaction[]>
    // findByCategory(category: IncomeCategory | ExpenseCategory): Promise<Transaction[]>
    // findByAmount(minAmount: number, maxAmount: number): Promise<Transaction[]>
    create(transaction: Transaction): Promise<void>
    update(transaction: Transaction): Promise<void>
    delete(transaction: Transaction): Promise<void>
}
