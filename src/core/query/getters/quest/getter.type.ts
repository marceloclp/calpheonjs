import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Quest> =
    (data: BDOCodex.Query.Responses.Quest) => Entities.Quest[K]