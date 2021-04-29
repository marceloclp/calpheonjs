import { App } from '@typings/namespaces'

export { Quest } from './quest'

export type Select<T extends App.Entities.Types> =
    T extends App.Entities.Types.Quest
        ? App.Query.Entities.Quest
    : App.Query.Entities.Quest
