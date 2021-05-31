import { BDO } from '@typings/namespaces'
import { Entities, QueryableEntity } from '@core/query/typings'
import { Generic } from './generic.interface'

export type Select<T extends QueryableEntity> =
    T extends BDO.Entities.Types.Quest
        ? Entities.Quest
    : Generic<T>