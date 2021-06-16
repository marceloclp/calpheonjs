import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.NodeDrops> =
    (data: BDOCodex.Query.Responses.NodeDrops) => Entities.NodeDrops[K]