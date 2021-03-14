import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildNPC: Builder<
    App.Entities.Types.NPC
> = ({ $, id, type, locale }) => {
    const category =
        Getters.NPCs.getCategory({ $, id, type, locale })
    const args: GetterArgs = { $, id, type, locale, category }

    const entity: App.Entities.NPCs.NPC = {
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
            return Object.assign(entity, {
                group: Getters.NPCs.Others.getGroup(args),
                stats: Getters.NPCs.Others.getStats(args),
                mobType: Getters.NPCs.Others.getMobType(args),
                knowledge: Getters.getDroppedKnowledge(args),
                summonedByItem: Getters.getSummonedByItem(args),
            }) as App.Entities.NPCs.Other
        case App.Entities.NPCs.Categories.Worker:
            return Object.assign(entity, {
                sellable: Getters.NPCs.Workers.getSellable(args),
                stamina: Getters.NPCs.Workers.getStamina(args),
                levels: Getters.NPCs.Workers.getLevels(args),
                statsGrowth: Getters.NPCs.Workers.getGrowth(args),
                obtainedFrom: Getters.getObtainedFrom(args),
                acquireChanceTable: Getters.NPCs.Workers.getSkillsChance(args),
                personalSkill: Getters.NPCs.Workers.getPersonalSkill(args),
            }) as App.Entities.NPCs.Worker
        default: return entity
    }
}
