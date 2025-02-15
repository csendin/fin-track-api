import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'
import { Category } from '@/core/types/models/budget/category'
import { Period } from '@/core/types/models/budget/period'
import { Optional } from '@/core/types/optional'

export interface BudgetProps {
    category: Category
    limit: number
    period: Period
    createdAt: Date
    updatedAt: Date
    userId: UniqueEntityId
}

export class Budget extends Entity<BudgetProps> {
    static create(props: Optional<BudgetProps, 'createdAt' | 'updatedAt'>, id?: UniqueEntityId) {
        const budget = new Budget(
            {
                ...props,
                createdAt: props.createdAt ?? new Date(),
                updatedAt: props.createdAt ?? new Date(),
            },
            id
        )

        return budget
    }
}
