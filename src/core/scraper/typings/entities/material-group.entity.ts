import { Generic } from './generic.interface'
import { Refs } from '../index'
import { As } from './as.enum'

export interface MaterialGroup extends Generic<As.MaterialGroup> {
    /** The list of items that belong to this group. */
    items: Refs.Item[]
}
