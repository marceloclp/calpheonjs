import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Design> =
    (data: BDOCodex.Query.Responses.Design) => Entities.Design[K]