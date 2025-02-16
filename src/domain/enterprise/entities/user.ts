import { Entity } from '@/core/entities/entity'
import { UniqueEntityId } from '@/core/entities/unique-entity-id'

export interface UserProps {
    name: string
    email: string
    password: string
}

export class User extends Entity<UserProps> {
    get name() {
        return this.props.name
    }

    set name(name: string) {
        this.props.name = name
    }

    get email() {
        return this.props.email
    }

    set email(email: string) {
        this.props.email = email
    }

    get password() {
        return this.props.password
    }

    set password(password: string) {
        this.props.password = password
    }

    static create(props: UserProps, id?: UniqueEntityId) {
        const user = new User(
            {
                ...props,
            },
            id
        )

        return user
    }
}
