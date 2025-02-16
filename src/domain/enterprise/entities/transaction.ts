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
    get amount() {
        return this.props.amount
    }

    set amount(amount: number) {
        this.props.amount = amount
        this.touch()
    }

    get type() {
        return this.props.type
    }

    set type(type: Type) {
        this.props.type = type
        this.touch()
    }

    get category() {
        return this.props.category
    }

    set category(category: IncomeCategory | ExpenseCategory) {
        this.props.category = category
        this.touch()
    }

    get description() {
        return this.props.description
    }

    set description(description: string | null | undefined) {
        this.props.description = description
        this.touch()
    }

    get createdAt() {
        return this.props.createdAt
    }

    get updatedAt() {
        return this.props.updatedAt
    }

    get userId() {
        return this.props.userId
    }

    private touch() {
        this.props.updatedAt = new Date()
    }

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
