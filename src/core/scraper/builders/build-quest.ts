import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildQuest: Builder<
    App.Entities.Quest
> = ({ $, id, type, locale }) => {
    const args: GetterArgs = { $, id, type, locale }

    const entity: App.Entities.Quest = {
        id,
        type: App.Entities.Types.Quest,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
        category: Getters.getQuestCategory(args),
        region: Getters.getQuestRegion(args),
        group: Getters.getQuestGroup(args),
        level: Getters.getLevel(args),
        chain: Getters.getQuestChain(args),
        startNPC: Getters.getQuestStartNPC(args),
        endNPC: Getters.getQuestEndNPC(args),
        story: Getters.getQuestStory(args),
        rewards: Getters.getQuestRewards(args),
    }

    return entity
}
