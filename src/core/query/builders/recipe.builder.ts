import { BDO } from '@typings/namespaces'
import * as Getters from '@core/query/getters'
import { Generic } from './generic.builder'

export const Recipe = Generic
    .forType<BDO.Entities.Types.Recipe>(data => ({
        type: BDO.Entities.Types.Recipe,
        grade: Getters.Recipes.getGrade(data),
    } as any))