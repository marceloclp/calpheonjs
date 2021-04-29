import { App, BDOCodex } from '@typings/namespaces'
import { Builder } from './builders.types'
import * as Getters from '../getters'

export const buildQuest: Builder<
    App.Entities.Types.Quest,
    BDOCodex.Queries.Response.Quest
> = (data) => {
    return data.aaData.map(quest => ({
        type: App.Entities.Types.Quest,
        id: quest[0].display,
        name: Getters.Quests.getName(quest),
        icon: Getters.Quests.getIcon(quest),
        level: Getters.Quests.getLevel(quest),
        region: Getters.Quests.getRegion(quest),
        rewards: Getters.Quests.getRewards(quest),
    }))
}