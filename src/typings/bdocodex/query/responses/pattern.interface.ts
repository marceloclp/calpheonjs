import { Generic } from './generic.interface'
import { HTMLString } from '../utilities'

export interface Pattern extends Generic<string> {
    /** Required materials. */
    readonly 3: HTMLString

    /** Resulting products. */
    readonly 4: HTMLString
}