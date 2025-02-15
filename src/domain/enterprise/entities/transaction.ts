import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { ExpenseCategory } from '@/core/types/models/transaction/expense-category'
import { IncomeCategory } from '@/core/types/models/transaction/income-category'
import { Type } from '@/core/types/models/transaction/type'
import { Optional } from '@/core/types/optional'

export interface TransactionProps {
    amount: number
    type: Type
    category: IncomeCategory | ExpenseCategory
    description?: string | null
    createdAt: Date
    updatedAt: Date
    userId: UniqueEntityId
}

export class Transaction extends Entity<TransactionProps> {
    static create(props: Optional<TransactionProps, 'createdAt' | 'updatedAt'>, id?: UniqueEntityId) {
        const transaction = new Transaction(
            {
                ...props,
                createdAt: props.createdAt ?? new Date(),
                updatedAt: props.createdAt ?? new Date(),
            },
            id
        )

        return transaction
    }
}
