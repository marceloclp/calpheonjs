import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const Quest = Generic
    .forType(args => ({
        grade: Getters.getGrade(args),
        type: BDO.Entities.Types.Quest,
        subType: undefined,
        category: Getters.Quests.getCategory(args),
        group: Getters.Quests.getGroup(args),
        region: Getters.Quests.getRegion(args),
        level: Getters.Quests.getLevel(args),
        chain: Getters.Quests.getChain(args),
        startNPC: Getters.Quests.getStartNPC(args),
        endNPC: Getters.Quests.getEndNPC(args),
        story: Getters.Quests.getStory(args),
        rewards: Getters.Quests.getRewards(args),
    }))