import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const Processing = Generic
    .convert(args => ({
        type: BDO.Entities.Types.Processing,
        subType: undefined,
        materials: Getters.Crafting.getMaterials(args),
        products: Getters.Crafting.getProducts(args),
        process: Getters.Processing.getProcess(args),
        exp: Getters.Crafting.getExp(args),
        mastery: Getters.Crafting.getMastery(args),
    }))