import { BDOCodex } from '@typings/namespaces'
import { Entities } from '@core/query/typings'

export type Getter<K extends keyof Entities.Generic> =
    (data: BDOCodex.Query.Responses.Generic) => Entities.Generic[K]