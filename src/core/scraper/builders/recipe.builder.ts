import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const Recipe = Generic
    .forType(args => ({
        type: BDO.Entities.Types.Recipe,
        subType: undefined,
        materials: Getters.Crafting.getMaterials(args),
        products: Getters.Crafting.getProducts(args),
        process: Getters.Recipes.getProcess(args),
        exp: Getters.Crafting.getExp(args),
        mastery: Getters.Crafting.getMastery(args),
    }))