import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { As } from './as.enum'

export interface MaterialGroup extends Generic<As.MaterialGroup> {
    /** The list of items that belong to this group. */
    items: BDO.Refs.Item[]
}