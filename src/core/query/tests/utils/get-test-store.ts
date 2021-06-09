import { QueryableEntity } from '@core/query/typings'
import { TestStore } from '../typings/test-store.interface'

export const getTestStore = <T extends QueryableEntity>() => {
    return (global as any).stores.query as TestStore<T>
}