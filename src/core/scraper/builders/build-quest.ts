import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildQuest: Builder<
    App.Entities.Types.Quest
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }

    const entity: App.Entities.Quest = {
        id,
        type: App.Entities.Types.Quest,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
        category: Getters.Quests.getCategory(args),
        region: Getters.Quests.getRegion(args),
        group: Getters.Quests.getGroup(args),
        level: Getters.getLevel(args),
        chain: Getters.Quests.getChain(args),
        startNPC: Getters.Quests.getStartNPC(args),
        endNPC: Getters.Quests.getEndNPC(args),
        story: Getters.Quests.getStory(args),
        rewards: Getters.Quests.getRewards(args),
    }

    return entity
}
