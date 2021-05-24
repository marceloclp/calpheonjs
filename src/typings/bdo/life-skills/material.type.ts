import { BDO } from '@typings/namespaces'

export type Material =
    | BDO.Refs.Item<{ amount: number }>
    | BDO.Refs.MaterialGroup<{ amount: number }>