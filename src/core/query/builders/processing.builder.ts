import { BDO } from '@typings/namespaces'
import * as Getters from '@core/query/getters'
import { Generic } from './generic.builder'

export const Processing = Generic
    .forType<BDO.Entities.Types.Processing>(data => ({
        type: BDO.Entities.Types.Processing,
        grade: Getters.Processing.getGrade(data),
        process: Getters.Processing.getProcess(data),
        mastery: Getters.Processing.getMastery(data),
        exp: Getters.Processing.getExp(data),
        materials: Getters.Processing.getMaterials(data),
        products: Getters.Processing.getProducts(data),
    }))