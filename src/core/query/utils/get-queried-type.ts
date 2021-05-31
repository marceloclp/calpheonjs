import { BDO } from '@typings/namespaces'
import { GetQueriedType, Types } from '@core/query/typings'

const Lookup: Record<Types, BDO.Entities.Types> = {
    [Types.QuestReward]: BDO.Entities.Types.Item,
}
export const getQueriedType = <T extends Types>(type: T) => {
    return Lookup[type] as GetQueriedType<T>
}
