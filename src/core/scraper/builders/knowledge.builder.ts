import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const Knowledge = Generic
    .convert(args => ({
        type: BDO.Entities.Types.Knowledge,
        subType: undefined,
        group: Getters.Knowledge.getGroup(args),
        obtainedFrom: Getters.Knowledge.getObtainedFrom(args),
    }))