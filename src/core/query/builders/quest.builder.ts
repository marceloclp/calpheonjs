import { BDO } from '@typings/namespaces'
import { Builder } from '@core/query/utils/builder'
import * as Getters from '@core/query/getters'

export const Quest = Builder
    .forType(data => ({
        type: BDO.Entities.Types.Quest,
        id: Getters.Quests.getId(data),
        name: Getters.Quests.getName(data),
        icon: Getters.Quests.getIcon(data),
        level: Getters.Quests.getLevel(data),
        region: Getters.Quests.getRegion(data),
        rewards: Getters.Quests.getRewards(data),
    }))