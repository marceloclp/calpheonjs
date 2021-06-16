import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.NPCDrops> =
    (data: BDOCodex.Query.Responses.NPCDrops) => Entities.NPCDrops[K]