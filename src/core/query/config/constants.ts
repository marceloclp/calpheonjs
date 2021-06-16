import { BDOCodex } from '@typings/namespaces'
import { Descriptor, Entities, Modes, Selectors } from '../typings'

/**
 * Maps modes to Codex descriptors.
 * This is used to build the query url.
 */
export const MODES_TO_DESCRIPTORS: Record<Modes, Descriptor> = ((A, T) => ({
    [Modes.QuestReward]: { as: A.Quest, type: T.QuestReward },
    [Modes.ExchangeList]: { as: A.ExchangeItem, type: T.Item },
    [Modes.RecipeMaterial]: { as: A.Recipe, type: T.Material },
    [Modes.RecipeProduct]: { as: A.Recipe, type: T.Product },
    [Modes.PatternMaterial]: { as: A.Pattern, type: T.Material },
    [Modes.PatternProduct]: { as: A.Pattern, type: T.Product },
    [Modes.ProcessingMaterial]: { as: A.Processing, type: T.Material },
    [Modes.ProcessingProduct]: { as: A.Processing, type: T.Product },
    [Modes.DesignMaterial]: { as: A.Design, type: T.Material },
    [Modes.DesignProduct]: { as: A.Design, type: T.Product },
    [Modes.SoldByNPC]: { as: A.NPC, type: T.Sellable },
    [Modes.DroppedByNPC]: { as: A.Drop, type: T.NPCDropGroup },
    [Modes.DroppedByNode]: { as: A.Node, type: T.NodeDrop },
}))(BDOCodex.Query.As, BDOCodex.Query.Types)

/**
 * Maps a stringified descriptor object to its corresponding mode.
 * This is used to decompose the test file names.
 */
export const DESCRIPTORS_TO_MODES:
    & Record<string, Modes>
    & { parseKey: (descriptor: Descriptor) => string } = Object
        .entries(MODES_TO_DESCRIPTORS)
        .reduce((obj, [mode, descriptor]) => {
            const key = obj.parseKey(descriptor)
            return { ...obj, [key]: mode }
        }, { parseKey: ({ as, type }) => `${as}-${type}` } as any)

export const MODES_TO_RETURNED_AS: {
    [M in Modes]: Selectors.ReturnedAs<M>
} = ({
    [Modes.QuestReward]: Entities.As.Quest,
    [Modes.ExchangeList]: Entities.As.ExchangeItem,
    [Modes.RecipeMaterial]: Entities.As.Recipe,
    [Modes.RecipeProduct]: Entities.As.Recipe,
    [Modes.PatternMaterial]: Entities.As.Pattern,
    [Modes.PatternProduct]: Entities.As.Pattern,
    [Modes.ProcessingMaterial]: Entities.As.Processing,
    [Modes.ProcessingProduct]: Entities.As.Processing,
    [Modes.DesignMaterial]: Entities.As.Design,
    [Modes.DesignProduct]: Entities.As.Design,
    [Modes.SoldByNPC]: Entities.As.NPCSells,
    [Modes.DroppedByNPC]: Entities.As.NPCDrops,
    [Modes.DroppedByNode]: Entities.As.NodeDrops,
})