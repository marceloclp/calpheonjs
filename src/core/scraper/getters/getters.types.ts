import { App } from '@typings/namespaces'

export interface GetterArgs {
    readonly $: cheerio.Root
    readonly id: string
    readonly type: App.Entities.Types
    readonly category?: string
    readonly locale: App.Locales
}

export type Getter<R, E = void> = (args: GetterArgs, extra: E) => R