import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Processing> =
    (data: BDOCodex.Query.Responses.Processing) => Entities.Processing[K]