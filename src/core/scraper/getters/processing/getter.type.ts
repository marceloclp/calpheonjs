import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.Processing> =
    (args: GetterArgs) => Entities.Processing[K]