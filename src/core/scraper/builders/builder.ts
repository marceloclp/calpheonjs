import { Entities } from '../typings'
import { CreateBuilder } from '../utils/create-builder'
import { getReturnedAs } from '../utils/get-returned-as'
import { Getters as _ } from '../getters'

export const Builder = CreateBuilder
    .with(args => ({
        as: getReturnedAs(args.type),
        id: args.id,
        icon: _.Generic.getIcon(args),
        name: _.Generic.getName(args),
        description: _.Generic.getDescription(args),
        nameAlternative: _.Generic.getNameAlt(args),
        type: args.type,
    }))
    .as(Entities.As.Item, (args, subType = _.Item.getSubType(args)) => ({
        as: _.Item.getReturnedAs(subType),
        subType,
        grade: _.Gradeable.getGrade(args),
        prices: _.Item.getPrices(args),
        weight: _.Item.getWeight(args),
    }))
    .extend(Entities.As.ItemConsumable, args => ({
        effects: _.ItemConsumable.getEffects(args),
        duration: _.ItemConsumable.getDuration(args),
        cooldown: _.ItemConsumable.getCooldown(args),
    }))
    .extend(Entities.As.ItemEquipment, args => ({
        enhancements: _.ItemEquipment.getEnhancements(args),
        caphras: _.ItemEquipment.getCaphras(args),
        exclusiveTo: _.ItemEquipment.getExclusiveTo(args),
        fairyExp: _.ItemEquipment.getFairyExp(args),
    }))
    .as(Entities.As.Knowledge, args => ({
        as: Entities.As.Knowledge,
        group: _.Knowledge.getGroup(args),
        obtainedFrom: _.Knowledge.getObtainedFrom(args),
    }))
    .as(Entities.As.MaterialGroup, args => ({
        as: Entities.As.MaterialGroup,
        icon: _.MaterialGroup.getItems(args)[0].icon,
        items: _.MaterialGroup.getItems(args),
    }))
    .as(Entities.As.NPC, (args, subType = _.NPC.getSubType(args)) => ({
        as: _.NPC.getReturnedAs(subType),
        subType,
        grade: _.Gradeable.getGrade(args),
    }))
    .extend(Entities.As.NPCOther, args => ({
        group: _.NPCOther.getGroup(args),
        level: _.NPCOther.getLevel(args),
        stats: _.NPCOther.getStats(args),
        mobType: _.NPCOther.getMobType(args),
        knowledge: _.NPCOther.getDroppedKnowledge(args),
        droppedExp: _.NPCOther.getDroppedExp(args),
        droppedKarma: _.NPCOther.getDroppedKarma(args),
    }))
    .extend(Entities.As.NPCWorker, args => ({
        sellable: _.NPCWorker.getSellable(args),
        stamina: _.NPCWorker.getStamina(args),
        levels: _.NPCWorker.getLevels(args),
        statsGrowth: _.NPCWorker.getGrowth(args),
        obtainedFrom: _.NPCWorker.getObtainedFrom(args),
        acquireChanceTable: _.NPCWorker.getSkillsChance(args),
        personalSkill: _.NPCWorker.getPersonalSkill(args),
    }))
    .as(Entities.As.Processing, args => ({
        as: Entities.As.Processing,
        process: _.Processing.getProcess(args),
        materials: _.Craftable.getMaterials(args),
        products: _.Craftable.getProducts(args),
        exp: _.Craftable.getExp(args),
        mastery: _.Craftable.getMastery(args),
    }))
    .as(Entities.As.Quest, args => ({
        as: Entities.As.Quest,
        grade: _.Gradeable.getGrade(args),
        category: _.Quest.getCategory(args),
        group: _.Quest.getGroup(args),
        region: _.Quest.getRegion(args),
        level: _.Quest.getLevel(args),
        chain: _.Quest.getChain(args),
        startNPC: _.Quest.getStartNPC(args),
        endNPC: _.Quest.getEndNPC(args),
        story: _.Quest.getStory(args),
        rewards: _.Quest.getRewards(args),
    }))
    .as(Entities.As.Recipe, args => ({
        as: Entities.As.Recipe,
        process: _.Recipe.getProcess(args),
        materials: _.Craftable.getMaterials(args),
        products: _.Craftable.getProducts(args),
        exp: _.Craftable.getExp(args),
        mastery: _.Craftable.getMastery(args),
    }))
    .create()