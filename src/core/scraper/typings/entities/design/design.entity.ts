import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'
import { Craftable } from '../craftable.interface'

export interface Design extends
    Generic<BDO.Entities.Types.Design>,
    Craftable {

    /** The time required to craft the item, in seconds. */
    duration: number

    /** The workshop level required to craft this recipe. */
    workshopLevel: number
}