import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildNPC: Builder<
    App.Entities.NPCs.NPC
> = ({ $, id, type, locale }) => {
    const category =
        Getters.getCategory({ $, id, type, locale }) ||
        App.Entities.NPCs.Categories.Other
    const args: GetterArgs = { $, id, type, locale, category }

    const npc: App.Entities.NPCs.NPC = {
        id,
        category: category as App.Entities.NPCs.Categories,
        type: App.Entities.Types.NPC,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
        grade: Getters.getGrade(args),
    }

    switch (category) {
        case App.Entities.NPCs.Categories.Other:
            return Object.assign(npc, {
                group: Getters.getNPCGroup(args),
                stats: Getters.getNPCStats(args),
                mobType: Getters.getMobType(args),
                knowledge: Getters.getDroppedKnowledge(args),
                summonedByItem: Getters.getSummonedByItem(args),
            }) as App.Entities.NPCs.Other
        case App.Entities.NPCs.Categories.Worker:
            return Object.assign(npc, {
                sellable: Getters.getWorkerSellable(args),
                stamina: Getters.getWorkerStamina(args),
                levels: Getters.getWorkerLevels(args),
                statsGrowth: Getters.getWorkerGrowth(args),
                obtainedFrom: Getters.getObtainedFrom(args),
                skillLevelAcquireChance: Getters.getWorkerSkillsChance(args),
            }) as App.Entities.NPCs.Worker
        default: return npc
    }
}
