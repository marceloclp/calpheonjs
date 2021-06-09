import { Entities, ScrapableEntity } from '@core/scraper/typings'

export interface TestStore<T extends ScrapableEntity = any> {
    readonly keys: string[]
    readonly mocks: Record<string, Entities.Select<T>>
    readonly cache: Record<string, string>
}