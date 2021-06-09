import { BDO } from '@typings/namespaces'
import { Entities, QueryableEntity } from '@core/query/typings'
import { Generic } from './generic.interface'

export type Select<T extends QueryableEntity = any> =
    T extends BDO.Entities.Types.Quest
        ? Entities.Quest
    : T extends BDO.Entities.Types.Recipe
        ? Entities.Recipe
    : Generic<T>