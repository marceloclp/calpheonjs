import { Entities, ScrapableEntity } from '@core/scraper/typings'

interface TestStore<T extends ScrapableEntity> {
    readonly keys: string[]
    readonly mocks: Record<string, Entities.Select<T>>
    readonly cache: Record<string, string>
}

export const getTestStore = <T extends ScrapableEntity>() => {
    return (global as any).stores.scraper as TestStore<T>
}