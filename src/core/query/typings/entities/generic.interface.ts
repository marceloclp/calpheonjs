import { BDO } from '@typings/namespaces'

export interface Generic<T extends BDO.Entities.Types> {
    id: string

    type: T

    name: string

    icon: string
}