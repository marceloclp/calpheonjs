import { App } from '@typings/namespaces'

/** A hdydrated reference to some game entity. */
export interface Ref<T extends App.Entities.Types> {
    id: string
    type: T
    icon: string
    name: string
}