import { Generic } from './extendables/generic.interface'
import { As } from './as.enum'

export interface Node extends Generic<As.Node> {
    /** The region the node is located at. */
    zone: string

    /** Node conditions used for gardening. */
    conditions: {
        temperature: number
        humidity: number
        water: number
    }
}