import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const NPC = Generic
    .forType(args => ({
        type: BDO.Entities.Types.NPC,
        subType: Getters.NPCs.getSubType(args),
        grade: Getters.getGrade(args),
    }))
    .forSubType(BDO.NPCs.SubTypes.Worker, args => ({
        sellable: Getters.NPCs.Workers.getSellable(args),
        stamina: Getters.NPCs.Workers.getStamina(args),
        levels: Getters.NPCs.Workers.getLevels(args),
        statsGrowth: Getters.NPCs.Workers.getGrowth(args),
        obtainedFrom: Getters.NPCs.Workers.getObtainedFrom(args),
        acquireChanceTable: Getters.NPCs.Workers.getSkillsChance(args),
        personalSkill: Getters.NPCs.Workers.getPersonalSkill(args),
    }))
    .forSubType(BDO.NPCs.SubTypes.Other, args => ({
        group: Getters.NPCs.Others.getGroup(args),
        stats: Getters.NPCs.Others.getStats(args),
        mobType: Getters.NPCs.Others.getMobType(args),
        knowledge: Getters.NPCs.Others.getDroppedKnowledge(args),
    }))