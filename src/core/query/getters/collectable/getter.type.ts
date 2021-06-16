import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Collectable> =
    (data: BDOCodex.Query.Responses.Drop) => Entities.Collectable[K]