import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'

export interface Item<
    S extends BDO.Items.SubTypes = BDO.Items.SubTypes
> extends Generic<BDO.Entities.Types.Item, S> {

    /** An item has a grade. */
    grade: BDO.Grade

    /** An item may be sellable or buyable. */
    prices: BDO.Items.Pricings

    /** The item weight in LT as a floating point. */
    weight: number
}