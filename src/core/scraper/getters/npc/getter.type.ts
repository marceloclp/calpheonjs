import { BDO } from '@typings/namespaces'
import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.NPC> =
    (args: GetterArgs) => Entities.NPC[K]
export type GetterAs =
    (subType: BDO.NPCs.SubTypes) => Entities.NPC['as']