import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.NPCOther> =
    (args: GetterArgs) => Entities.NPCOther[K]