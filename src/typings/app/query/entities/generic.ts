import { App } from '@typings/namespaces'

export interface Generic<T extends App.Entities.Types> {
    type: T
}