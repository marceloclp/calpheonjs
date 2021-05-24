import { BDO } from '@typings/namespaces'
import { Generic } from '../generic.interface'

export interface NPC<
    S extends BDO.NPCs.SubTypes = BDO.NPCs.SubTypes
> extends Generic<BDO.Entities.Types.NPC, S> {

    /** An NPC has a grade, similar to items. */
    grade: BDO.Grade
}