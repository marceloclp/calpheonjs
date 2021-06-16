import { Generic } from './generic.interface'

export interface NodeDrops extends Generic<string> {
    /** Zone. */
    readonly 3: string

    /** Temperature. */
    readonly 4: string

    /** Humidity. */
    readonly 5: string

    /** Water. */
    readonly 6: string
}