import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface NodeDrops extends Generic<As.NodeDrops> {
    /** The region the node is located at. */
    zone: string

    /** Node conditions used for gardening. */
    conditions: {
        temperature: number
        humidity: number
        water: number
    }
}