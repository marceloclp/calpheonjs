import { Generic } from './generic.interface'
import { HTMLString, SorteableField } from '../utilities'

export interface Design extends Generic<string> {
    /** The skill level, but it's always the same as designs do not require skil level. */
    readonly 4: SorteableField

    /** Required materials. */
    readonly 6: HTMLString

    /** Resulting products. */
    readonly 7: HTMLString

    /** A stringified array containing the materials ids. */
    readonly 8: string
}