import { BDO } from '@typings/namespaces'
import * as Getters from '@core/query/getters'
import { Generic } from './generic.builder'

export const Recipe = Generic
    .forType<BDO.Entities.Types.Recipe>(data => ({
        type: BDO.Entities.Types.Recipe,
        grade: Getters.Recipes.getGrade(data),
        process: Getters.Recipes.getProcess(data),
        mastery: Getters.Recipes.getMastery(data),
        exp: Getters.Recipes.getExp(data),
        materials: Getters.Recipes.getMaterials(data),
        products: Getters.Recipes.getProducts(data),
    }))