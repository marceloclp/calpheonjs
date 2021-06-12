import { BDO } from '@typings/namespaces'
import { CreateBuilder } from '@helpers/utils/create-builder'
import { QueryBuilder } from '../typings/query-builder.interface'
import { getReturnType } from '../utils/get-return-type'
import * as Getters from '../getters'

export const Builder = CreateBuilder<QueryBuilder>()
    .forGeneric(data => ({
        id: Getters.getId(data),
        name: Getters.getName(data),
        icon: Getters.getIcon(data),
    }))
    .forType(BDO.Entities.Types.Design, data => ({
        grade: Getters.Designs.getGrade(data),
        materials: Getters.Designs.getMaterials(data),
        products: Getters.Designs.getProducts(data),
    }))
    .forType(BDO.Entities.Types.Processing, data => ({
        grade: Getters.Processing.getGrade(data),
        process: Getters.Processing.getProcess(data),
        mastery: Getters.Processing.getMastery(data),
        exp: Getters.Processing.getExp(data),
        materials: Getters.Processing.getMaterials(data),
        products: Getters.Processing.getProducts(data),
    }))
    .forType(BDO.Entities.Types.Quest, data => ({
        level: Getters.Quests.getLevel(data),
        region: Getters.Quests.getRegion(data),
        rewards: Getters.Quests.getRewards(data),
    }))
    .forType(BDO.Entities.Types.Recipe, data => ({
        grade: Getters.Recipes.getGrade(data),
        process: Getters.Recipes.getProcess(data),
        mastery: Getters.Recipes.getMastery(data),
        exp: Getters.Recipes.getExp(data),
        materials: Getters.Recipes.getMaterials(data),
        products: Getters.Recipes.getProducts(data),
    }))
    .create(mode => ({ type: getReturnType(mode) }))