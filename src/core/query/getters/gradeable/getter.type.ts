import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Gradeable> =
    (data: BDOCodex.Query.Responses.Generic) => Entities.Gradeable[K]