import { BuildableEntity } from '@core/query/typings'
import { TestStore } from '../typings/test-store.interface'

export const getTestStore = <BE extends BuildableEntity>() => {
    return (global as any).stores.query as TestStore<BE>
}