import { HTMLString, SorteableField } from '../utilities'
import { Generic } from './generic.interface'

export interface Recipe extends Generic<string> {
    /** Processing type. */
    readonly 3: string

    /** The required level to be able to craft this recipe. */
    readonly 4: SorteableField

    /** EXP awarded upon successful craft. */
    readonly 5: string

    /** Required materials. */
    readonly 6: HTMLString

    /** Resulting products. */
    readonly 7: HTMLString

    /** A stringified array containing the materials ids. */
    readonly 8: string
}
