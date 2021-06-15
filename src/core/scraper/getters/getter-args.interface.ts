import { App } from '@typings/namespaces'
import { ScrapableEntity } from '../typings'

export interface GetterArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: ScrapableEntity
    readonly locale: App.Locales
}