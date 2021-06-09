import { BDO } from '@typings/namespaces'
import * as Getters from '@core/query/getters'
import { Generic } from './generic.builder'

export const Quest = Generic
    .forType<BDO.Entities.Types.Quest>(data => ({
        type: BDO.Entities.Types.Quest,
        level: Getters.Quests.getLevel(data),
        region: Getters.Quests.getRegion(data),
        rewards: Getters.Quests.getRewards(data),
    }))