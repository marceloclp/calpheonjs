import { App, BDO } from '@typings/namespaces'
import { Generic } from '../generic'

export interface Item<C extends App.Entities.Items.Category = 'unknown'>
    extends Generic<App.Entities.Types.Item> {
    category: C | App.Entities.Items.Category
    /** An item has a grade. */
    grade: BDO.Grade
    /** An item may be sellable or buyable. */
    prices?: BDO.Prices
    /** The item weight in LT as a floating point. */
    weight: number
}