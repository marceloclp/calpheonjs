import { BDO } from '@typings/namespaces'
import { Selectors, Types } from '@core/query/typings'

const Lookup: Record<Types, BDO.Entities.Types> = {
    [Types.QuestReward]: BDO.Entities.Types.Item,
    [Types.RecipeMaterial]: BDO.Entities.Types.Item,
}
export const getQueriedType = <T extends Types>(type: T) => {
    return Lookup[type] as Selectors.QueriedType<T>
}
