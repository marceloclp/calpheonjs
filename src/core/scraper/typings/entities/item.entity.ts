import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { Gradeable } from './gradeable.interface'
import { As } from './as.enum'

export interface Item extends Generic<As.Item | As.ItemConsumable | As.ItemEquipment>, Gradeable {
    subType: BDO.Items.SubTypes

    prices: {
        buy?: number
        sell?: number
        repair?: number
        // TODO market?: number
    }

    /** The item weight in LT as a floating point. */
    weight: number
}
