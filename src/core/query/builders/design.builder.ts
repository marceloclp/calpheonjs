import { BDO } from '@typings/namespaces'
import * as Getters from '@core/query/getters'
import { Generic } from './generic.builder'

export const Design = Generic
    .forType<BDO.Entities.Types.Design>(data => ({
        type: BDO.Entities.Types.Design,
        grade: Getters.Designs.getGrade(data),
        materials: Getters.Designs.getMaterials(data),
        products: Getters.Designs.getProducts(data),
    }))