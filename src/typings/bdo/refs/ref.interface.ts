import { BDO } from '@typings/namespaces'

export type Ref<T extends BDO.Entities.Types, E> = {
    type: T

    id: string

    name?: string

    icon?: string
} & E