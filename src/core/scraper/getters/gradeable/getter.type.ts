import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.Gradeable> =
    (args: GetterArgs) => Entities.Gradeable[K]