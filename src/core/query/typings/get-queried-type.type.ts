import { BDO } from '@typings/namespaces'
import { Types } from './types.enum'

/** Maps the query type to the expected return type. */
export type GetQueriedType<T extends Types> =
    T extends Types.QuestReward
        ? BDO.Entities.Types.Item
    : BDO.Entities.Types