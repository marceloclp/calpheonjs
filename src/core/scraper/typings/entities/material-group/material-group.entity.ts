import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'

export interface MaterialGroup
    extends Generic<BDO.Entities.Types.MaterialGroup> {

    /** The list of items that belong to this group. */
    items: BDO.Refs.Item[]
}