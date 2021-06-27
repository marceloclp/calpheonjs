import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.NPC> =
    (data: BDOCodex.Query.Responses.NPC) => Entities.NPC[K]