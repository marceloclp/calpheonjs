import { App } from '@typings/index'

export interface GetterArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: App.Entities.Types
    readonly category?: App.Entities.Categories
    readonly locale: App.Locales
}

export type Getter<R, E = void> = (args: GetterArgs, extra: E) => R