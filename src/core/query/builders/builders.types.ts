import { App } from '@typings/namespaces'

export type Builder<
    T extends App.Entities.Types,
    D
> = (data: D) => App.Query.Entities.Select<T>[]