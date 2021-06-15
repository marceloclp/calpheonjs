import { BDO } from '@typings/namespaces'
import { Entities } from '../../typings'
import { GetterAs } from './getter.type'

export const getReturnedAs: GetterAs = (subType) => {
    return {
        [BDO.NPCs.SubTypes.Other]: Entities.As.NPCOther,
        [BDO.NPCs.SubTypes.Worker]: Entities.As.NPCWorker,
    }[subType] || Entities.As.NPC
}