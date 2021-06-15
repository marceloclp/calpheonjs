import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.ItemConsumable> =
    (args: GetterArgs) => Entities.ItemConsumable[K]