import { Generic } from './generic.interface'

export interface Drop extends Generic<string> {
    /** Amount of the item dropped. */
    readonly 3: string

    /** Chance of dropping the item. */
    readonly 4: string
}