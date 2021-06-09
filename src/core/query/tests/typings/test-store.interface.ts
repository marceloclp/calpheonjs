import { Entities, QueryableEntity } from '@core/query/typings'

export interface TestStore<T extends QueryableEntity> {
    readonly keys: string[]
    readonly mocks: Record<string, Entities.Select<T>[]>
    readonly cache: Record<string, string>
}