import { BDO } from '@typings/namespaces'
import { QueryTypes, Selectors } from '../typings'

export function getReturnType<T extends QueryTypes>(type: T) {
    return {
        [QueryTypes.QuestReward]: BDO.Entities.Types.Quest,
        [QueryTypes.RecipeMaterial]: BDO.Entities.Types.Recipe,
        [QueryTypes.RecipeProduct]: BDO.Entities.Types.Recipe,
        [QueryTypes.ProcessingMaterial]: BDO.Entities.Types.Processing,
        [QueryTypes.ProcessingProduct]: BDO.Entities.Types.Processing,
        [QueryTypes.DesignMaterial]: BDO.Entities.Types.Design,
        [QueryTypes.DesignProduct]: BDO.Entities.Types.Design,
    }[type] as Selectors.ReturnType<T>
}