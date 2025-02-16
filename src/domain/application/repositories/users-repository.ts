import { User } from '@/domain/enterprise/entities/user'

export interface UsersRepository {
    findById(id: string): Promise<User | null>
    findByEmail(email: string): Promise<User | null>
    create(user: User): Promise<void>
    update(user: User): Promise<void>
    delete(user: User): Promise<void>
}
