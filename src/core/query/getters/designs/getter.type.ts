import { BDOCodex } from '@typings/namespaces'
import { Entities } from '@core/query/typings'

export type Getter<K extends keyof Entities.Design> =
    (data: BDOCodex.Query.Responses.Design) => Entities.Design[K]