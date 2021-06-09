import { ScrapableEntity } from '@core/scraper/typings'
import { TestStore } from '../typings/test-store.interface'

export const getTestStore = <T extends ScrapableEntity>() => {
    return (global as any).stores.scraper as TestStore<T>
}