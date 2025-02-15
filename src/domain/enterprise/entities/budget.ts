import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface BudgetProps {
    category: string
    limit: number
    period: string
    createdAt: Date
    updatedAt: Date
    userId: UniqueEntityId
}

export class Budget extends Entity<BudgetProps> {
    static create(props: BudgetProps, id?: UniqueEntityId) {
        const budget = new Budget(
            {
                ...props,
            },
            id
        )

        return budget
    }
}
