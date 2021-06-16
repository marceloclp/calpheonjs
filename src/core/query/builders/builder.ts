import { BDO } from '@typings/namespaces'
import { Entities } from '../typings'
import { CreateBuilder } from '../utils/create-builder'
import { Getters as _ } from '../getters'

export const Builder = CreateBuilder
    .with(data => ({
        id: _.Generic.getId(data),
        name: _.Generic.getName(data),
        icon: _.Generic.getIcon(data),
    }))
    .as(Entities.As.Design, data => ({
        type: BDO.Entities.Types.Design,
        grade: _.Gradeable.getGrade(data),
        materials: _.Craftable.getItems(data, 6),
        products: _.Craftable.getItems(data, 7),
    }))
    .as(Entities.As.NodeDrops, data => ({
        type: BDO.Entities.Types.Node,
        zone: _.NodeDrops.getZone(data),
        conditions: _.NodeDrops.getConditions(data),
    }))
    .as(Entities.As.NPCDrops, data => ({
        type: BDO.Entities.Types.NPC,
        quantity: _.Collectable.getQuantity(data),
        chance: _.Collectable.getChance(data),
    }))
    .as(Entities.As.ExchangeItem, data => ({
        type: BDO.Entities.Types.Item,
        grade: _.Gradeable.getGrade(data),
        quantity: _.ExchangeItem.getQuantity(data),
        tradeForItem: _.ExchangeItem.getTradeForItem(data),
        tradeWith: _.ExchangeItem.getTradeWith(data),
    }))
    .as(Entities.As.NPCSells, data => ({
        type: BDO.Entities.Types.NPC,
        title: _.NPCSells.getTitle(data),
        level: _.NPCSells.getLevel(data),
        stats: _.NPCSells.getStats(data),
        droppedExp: _.NPCSells.getDroppedExp(data),
        droppedKarma: _.NPCSells.getDroppedKarma(data),
    }))
    .as(Entities.As.Pattern, data => ({
        type: BDO.Entities.Types.Pattern,
        materials: _.Craftable.getItems(data, 3),
        products: _.Craftable.getItems(data, 4),
    }))
    .as(Entities.As.Processing, data => ({
        type: BDO.Entities.Types.Processing,
        grade: _.Gradeable.getGrade(data),
        process: _.Processing.getProcess(data),
        mastery: _.Craftable.getMastery(data),
        exp: _.Craftable.getExp(data),
        materials: _.Craftable.getItems(data, 6),
        products: _.Craftable.getItems(data, 7),
    }))
    .as(Entities.As.Quest, data => ({
        type: BDO.Entities.Types.Quest,
        level: _.Quest.getLevel(data),
        region: _.Quest.getRegion(data),
        rewards: _.Quest.getRewards(data),
    }))
    .as(Entities.As.Recipe, data => ({
        type: BDO.Entities.Types.Recipe,
        grade: _.Gradeable.getGrade(data),
        process: _.Recipe.getProcess(data),
        mastery: _.Craftable.getMastery(data),
        exp: _.Craftable.getExp(data),
        materials: _.Craftable.getItems(data, 6),
        products: _.Craftable.getItems(data, 7),
    }))
    .as(Entities.As.Gatherable, data => ({
        type: BDO.Entities.Types.Gatherable,
        quantity: _.Collectable.getQuantity(data),
        chance: _.Collectable.getChance(data),
    }))
    .create()