import { App } from '@typings/namespaces'
import { ScrapableEntity } from '@core/scraper/typings'

export interface GetterArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: ScrapableEntity
    readonly subType?: string
    readonly locale: App.Locales
}

export type Getter<R> =
    (args: GetterArgs) => R