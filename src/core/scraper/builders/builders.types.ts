import { App } from '@typings/namespaces'

export interface BuilderArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: App.Entities.Types
    readonly locale: App.Locales
}

export type Builder<T> = (options: BuilderArgs) => T
