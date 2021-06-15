import { BDO } from '@typings/namespaces'
import { Entities } from '../../typings'
import { GetterArgs } from '../getter-args.interface'

export type Getter<K extends keyof Entities.Item> =
    (args: GetterArgs) => Entities.Item[K]
export type GetterAs =
    (subType: BDO.Items.SubTypes) => Entities.Item['as']