import { BDO } from '@typings/namespaces'
import { Modes, Selectors } from '../typings'

export function getReturnType<M extends Modes>(mode: M) {
    return {
        [Modes.QuestReward]: BDO.Entities.Types.Quest,
        [Modes.RecipeMaterial]: BDO.Entities.Types.Recipe,
        [Modes.RecipeProduct]: BDO.Entities.Types.Recipe,
        [Modes.ProcessingMaterial]: BDO.Entities.Types.Processing,
        [Modes.ProcessingProduct]: BDO.Entities.Types.Processing,
        [Modes.DesignMaterial]: BDO.Entities.Types.Design,
        [Modes.DesignProduct]: BDO.Entities.Types.Design,
    }[mode] as Selectors.ReturnType<M>
}