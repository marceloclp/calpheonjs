import { BDOCodex } from '@typings/namespaces'
import { Modes } from '../typings'

const { As, Types } = BDOCodex.Query
export class ModeLookup {
    private static modeToDescriptor: Record<Modes, BDOCodex.Query.Descriptor> = {
        [Modes.QuestReward]: { a: As.Quest, type: Types.QuestReward },
        [Modes.RecipeMaterial]: { a: As.Recipe, type: Types.Material },
        [Modes.RecipeProduct]: { a: As.Recipe, type: Types.Product },
        [Modes.ProcessingMaterial]: { a: As.Processing, type: Types.Material },
        [Modes.ProcessingProduct]: { a: As.Processing, type: Types.Product },
        [Modes.DesignMaterial]: { a: As.Design, type: Types.Material },
        [Modes.DesignProduct]: { a: As.Design, type: Types.Product },
    }

    private static descriptorToMode: Record<string, Modes> = Object
        .entries(ModeLookup.modeToDescriptor)
        .reduce((obj, [queryType, { a, type }]) => {
            return { ...obj, [`${a}-${type}`]: queryType }
        }, {})

    static toQueryType({ a, type }: BDOCodex.Query.Descriptor) {
        const lookupKey = `${a}-${type}`
        if (!(lookupKey in ModeLookup.descriptorToMode)) {
            throw new Error(
                `Attempted to map an unknown or invalid query descriptor. ` +
                `The descriptor ${lookupKey} could not be converted to query type. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return ModeLookup.descriptorToMode[`${a}-${type}`]
    }

    static toCodexDescriptor(type: Modes): BDOCodex.Query.Descriptor {
        if (!(type in ModeLookup.modeToDescriptor)) {
            throw new Error(
                `Attempted to map an unknown or invalid query type. ` +
                `The query type ${type} could not be converted to a codex descriptor. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return ModeLookup.modeToDescriptor[type]
    }
}