import { BDOCodex } from '@typings/namespaces'
import { Entities } from '@core/query/typings'

export type Getter<K extends keyof Entities.Quest> =
    (data: BDOCodex.Queries.Response.Quest) => Entities.Quest[K]