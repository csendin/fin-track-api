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
    get category() {
        return this.props.category
    }

    set category(category: Category) {
        this.props.category = category
        this.touch()
    }

    get limit() {
        return this.props.limit
    }

    set limit(limit: number) {
        this.props.limit = limit
        this.touch()
    }

    get period() {
        return this.props.period
    }

    set period(period: Period) {
        this.props.period = period
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
