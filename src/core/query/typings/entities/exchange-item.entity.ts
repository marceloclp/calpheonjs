import { BDO } from '@typings/namespaces'
import { Generic } from './extendables/generic.interface'
import { Gradeable } from './extendables/gradeable.interface'
import { As } from './as.enum'

export interface ExchangeItem extends Generic<As.ExchangeItem>, Gradeable {
    /** The amount of items rewarded upon exchange. */
    quantity: number

    /** The item required to perform the exchange. */
    tradeForItem: BDO.Refs.Item

    /** A list of NPCs that can perform this exchange. */
    tradeWith: BDO.Refs.NPC[]

    // TODO: exhange item conditions
    // conditions: any
}