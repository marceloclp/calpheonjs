import { HTMLString } from '../utilities'
import { Generic } from './generic.interface'

 export interface ExchangeItem extends Generic<string> {
    /** Amount of items received upon successful exchange. */
    readonly 3: string

    /** Item required as payment. */
    readonly 4: HTMLString

    /** NPCs that can do this exchange. */
    readonly 5: HTMLString

    /** Conditions required to do the exchange. */
    readonly 6: HTMLString
}
