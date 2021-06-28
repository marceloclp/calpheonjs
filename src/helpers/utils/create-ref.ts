import { BDO } from '@typings/namespaces'
import { Scrape } from '@core/scraper'
import { ScrapableEntity, Selectors } from '@core/scraper/typings'
import { isScrapableEntity } from '@core/scraper/utils/is-scrapable-entity'

export type Ref<T extends BDO.Entities.Types, E = {}> = {
    type: T
    id: string
    name?: string
    icon?: string
    scrape: T extends ScrapableEntity
        ? () => Promise<Selectors.ReturnedEntity<T>>
        : never
} & E

export function createRef<
    T extends BDO.Entities.Types,
    O extends Record<string, any> = {},
>(ref: Omit<Ref<T>, 'scrape'>, extend?: O): Ref<T, O> {
    const { type, id } = ref
    return (isScrapableEntity(type)
        ? { ...ref, ...extend, scrape: () => Scrape(type, id) }
        : { ...ref, ...extend }) as Ref<T, O>
}
