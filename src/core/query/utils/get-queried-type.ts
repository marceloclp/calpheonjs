import { BDO } from '@typings/namespaces'
import { Modes, Selectors } from '../typings'

export function getQueriedType<M extends Modes>(mode: M) {
    return {
        [Modes.QuestReward]: BDO.Entities.Types.Item,
        [Modes.RecipeMaterial]: BDO.Entities.Types.Item,
        [Modes.RecipeProduct]: BDO.Entities.Types.Item,
        [Modes.ProcessingMaterial]: BDO.Entities.Types.Item,
        [Modes.ProcessingProduct]: BDO.Entities.Types.Item,
        [Modes.DesignMaterial]: BDO.Entities.Types.Design,
        [Modes.DesignProduct]: BDO.Entities.Types.Design,
    }[mode] as Selectors.QueriedType<M>
}