import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.ExchangeItem> =
    (data: BDOCodex.Query.Responses.ExchangeItem) => Entities.ExchangeItem[K]