import { BDO } from '@typings/namespaces'
import { QueryTypes, Selectors } from '../typings'

export function getQueriedType<T extends QueryTypes>(type: T) {
    return {
        [QueryTypes.QuestReward]: BDO.Entities.Types.Item,
        [QueryTypes.RecipeMaterial]: BDO.Entities.Types.Item,
        [QueryTypes.RecipeProduct]: BDO.Entities.Types.Item,
        [QueryTypes.ProcessingMaterial]: BDO.Entities.Types.Item,
        [QueryTypes.ProcessingProduct]: BDO.Entities.Types.Item,
        [QueryTypes.DesignMaterial]: BDO.Entities.Types.Design,
        [QueryTypes.DesignProduct]: BDO.Entities.Types.Design,
    }[type] as Selectors.QueriedType<T>
}