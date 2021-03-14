import { App } from '@typings/namespaces'

export type TestDescriptor<T extends App.Entities.Types> = {
    readonly id: string
    readonly type: T
    readonly locale: App.Locales
    readonly category?: App.Entities.SelectCategory<T>
    readonly $: cheerio.Root
}

export type TestData<
    T extends App.Entities.Types,
    C extends App.Entities.SelectCategory<T>
> = [string, App.Entities.Select<T, C>, TestDescriptor<T>]