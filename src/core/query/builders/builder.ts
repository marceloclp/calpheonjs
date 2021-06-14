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
        grade: _.Design.getGrade(data),
        materials: _.Craftable.getMaterials(data),
        products: _.Design.getProducts(data),
    }))
    .as(Entities.As.NPCSells, data => ({
        type: BDO.Entities.Types.NPC,
        title: _.NPCSells.getTitle(data),
        level: _.NPCSells.getLevel(data),
        stats: _.NPCSells.getStats(data),
        droppedExp: _.NPCSells.getDroppedExp(data),
        droppedKarma: _.NPCSells.getDroppedKarma(data),
    }))
    .as(Entities.As.Processing, data => ({
        type: BDO.Entities.Types.Processing,
        grade: _.Processing.getGrade(data),
        process: _.Processing.getProcess(data),
        mastery: _.Craftable.getMastery(data),
        exp: _.Craftable.getExp(data),
        materials: _.Craftable.getMaterials(data),
        products: _.Craftable.getProducts(data),
    }))
    .as(Entities.As.Quest, data => ({
        type: BDO.Entities.Types.Quest,
        level: _.Quest.getLevel(data),
        region: _.Quest.getRegion(data),
        rewards: _.Quest.getRewards(data),
    }))
    .as(Entities.As.Recipe, data => ({
        type: BDO.Entities.Types.Recipe,
        grade: _.Recipe.getGrade(data),
        process: _.Recipe.getProcess(data),
        mastery: _.Craftable.getMastery(data),
        exp: _.Craftable.getExp(data),
        materials: _.Craftable.getMaterials(data),
        products: _.Craftable.getProducts(data),
    }))
    .create()