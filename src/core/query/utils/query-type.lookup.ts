import { BDOCodex } from '@typings/namespaces'
import { QueryTypes } from '../typings'

export class QueryTypeLookup {
    private static typeToDescriptor: Record<QueryTypes, BDOCodex.Query.Descriptor> = {
        [QueryTypes.QuestReward]: {
            a: BDOCodex.Query.As.Quest,
            type: BDOCodex.Query.Types.QuestReward,
        },
        [QueryTypes.RecipeMaterial]: {
            a: BDOCodex.Query.As.Recipe,
            type: BDOCodex.Query.Types.Material,
        },
    }

    private static descriptorToType: Record<string, QueryTypes> = Object
        .entries(QueryTypeLookup.typeToDescriptor)
        .reduce((obj, [queryType, { a, type }]) => {
            return { ...obj, [`${a}-${type}`]: queryType }
        }, {})

    static toQueryType({ a, type }: BDOCodex.Query.Descriptor) {
        const lookupKey = `${a}-${type}`
        if (!(lookupKey in QueryTypeLookup.descriptorToType)) {
            throw new Error(
                `Attempted to map an unknown or invalid query descriptor. ` +
                `The descriptor ${lookupKey} could not be converted to query type. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return QueryTypeLookup.descriptorToType[`${a}-${type}`]
    }

    static toCodexDescriptor(type: QueryTypes): BDOCodex.Query.Descriptor {
        if (!(type in QueryTypeLookup.typeToDescriptor)) {
            throw new Error(
                `Attempted to map an unknown or invalid query type. ` +
                `The query type ${type} could not be converted to a codex descriptor. ` +
                `Please report this error by opening an issue on the GitHub page.`
            )
        }
        return QueryTypeLookup.typeToDescriptor[type]
    }
}