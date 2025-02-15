import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface TransactionProps {
    amount: number
    type: string
    category: string
    description?: string | null
    createdAt: Date
    updatedAt: Date
    userId: UniqueEntityId
}

export class Transaction extends Entity<TransactionProps> {
    static create(props: TransactionProps, id?: UniqueEntityId) {
        const transaction = new Transaction(
            {
                ...props,
            },
            id
        )

        return transaction
    }
}
