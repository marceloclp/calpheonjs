import { App } from '@typings/namespaces'

export interface BuilderArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: App.Entities.Types
    readonly locale: App.Locales
}

export type Builder<
    T extends App.Entities.Types
> = (options: BuilderArgs) => App.Entities.Select<T, any>
