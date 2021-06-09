import { BDOCodex } from '@typings/namespaces'
import { Entities } from '@core/query/typings'

export type Getter<K extends keyof Entities.Recipe> =
    (data: BDOCodex.Query.Responses.Recipe) => Entities.Recipe[K]