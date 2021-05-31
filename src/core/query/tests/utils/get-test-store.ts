import { Entities, QueryableEntity } from '@core/query/typings'

interface TestStore<T extends QueryableEntity> {
    readonly keys: string[]
    readonly mocks: Record<string, Entities.Select<T>[]>
    readonly cache: Record<string, string>
}

export const getTestStore = <T extends QueryableEntity>() => {
    return (global as any).stores.query as TestStore<T>
}