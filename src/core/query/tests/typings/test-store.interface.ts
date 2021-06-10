import { QueryableEntity, Selectors } from '@core/query/typings'

export interface TestStore<T extends QueryableEntity> {
    readonly keys: string[]
    readonly mocks: Record<string, Selectors.ReturnEntity<T>[]>
    readonly cache: Record<string, string>
}