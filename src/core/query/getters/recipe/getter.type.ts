import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Recipe> =
    (data: BDOCodex.Query.Responses.Recipe) => Entities.Recipe[K]