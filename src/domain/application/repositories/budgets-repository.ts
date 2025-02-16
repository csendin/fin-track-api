import { Transaction } from '@/domain/enterprise/entities/transaction'

export interface TransactionsRepository {
    findById(id: string): Promise<Transaction | null>
    findMany(): Promise<Transaction[]>
    findByUserId(userId: number): Promise<Transaction[]>
    create(transaction: Transaction): Promise<void>
    update(transaction: Transaction): Promise<void>
    delete(transaction: Transaction): Promise<void>
}
