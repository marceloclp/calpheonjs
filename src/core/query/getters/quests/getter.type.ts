import { BDOCodex } from '@typings/namespaces'
import { Entities } from '@core/query/typings'

export type Getter<K extends keyof Entities.Quest> =
    (data: BDOCodex.Query.Responses.Quest) => Entities.Quest[K]