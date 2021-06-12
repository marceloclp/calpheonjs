import { BDO } from '@typings/namespaces'
import { CreateBuilder } from '@helpers/utils/create-builder'
import { ScraperBuilder } from '../typings/scraper-builder.interface'
import * as Getters from '../getters'

export const Builder = CreateBuilder<ScraperBuilder>()
    .forGeneric(args => ({
        id: args.id,
        icon: Getters.getIcon(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
    }))
    .forType(BDO.Entities.Types.Item, args => ({
        subType: Getters.Items.getSubType(args),
        grade: Getters.getGrade(args),
        prices: Getters.Items.getPrices(args),
        weight: Getters.Items.getWeight(args),
    }))
    .forSubType(BDO.Items.SubTypes.Consumable, args => ({
        effects: Getters.Items.Consumables.getEffects(args),
        duration: Getters.Items.Consumables.getDuration(args),
        cooldown: Getters.Items.Consumables.getCooldown(args),
    }))
    .forSubType(BDO.Items.SubTypes.Equipment, args => ({
        enhancements: Getters.Items.Equipments.getEnhancements(args),
        caphras: Getters.Items.Equipments.getCaphras(args),
        exclusiveTo: Getters.Items.Equipments.getExclusiveTo(args),
        fairyExp: Getters.Items.Equipments.getFairyExp(args),
    }))
    .forType(BDO.Entities.Types.Knowledge, args => ({
        group: Getters.Knowledge.getGroup(args),
        obtainedFrom: Getters.Knowledge.getObtainedFrom(args),
    }))
    .forType(BDO.Entities.Types.MaterialGroup, args => ({
        type: BDO.Entities.Types.MaterialGroup,
        icon: Getters.MaterialGroup.getItems(args)[0].icon,
        items: Getters.MaterialGroup.getItems(args),
    }))
    .forType(BDO.Entities.Types.NPC, args => ({
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
    .forType(BDO.Entities.Types.Processing, args => ({
        materials: Getters.Crafting.getMaterials(args),
        products: Getters.Crafting.getProducts(args),
        process: Getters.Processing.getProcess(args),
        exp: Getters.Crafting.getExp(args),
        mastery: Getters.Crafting.getMastery(args),
    }))
    .forType(BDO.Entities.Types.Quest, args => ({
        grade: Getters.getGrade(args),
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
    .forType(BDO.Entities.Types.Recipe, args => ({
        materials: Getters.Crafting.getMaterials(args),
        products: Getters.Crafting.getProducts(args),
        process: Getters.Recipes.getProcess(args),
        exp: Getters.Crafting.getExp(args),
        mastery: Getters.Crafting.getMastery(args),
    }))
    .create(type => ({ type }))