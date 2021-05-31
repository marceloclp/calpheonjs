import { Types } from '@core/query/typings'
import { BDOCodex } from '@typings/namespaces'

const BDOCodexLookup = Object
    .entries(BDOCodex.Queries.Types)
    .reduce((lookup, [key, value]) => {
        return key in Types ?
            { ...lookup, [value]: Types[key] }
            : lookup
    }, {} as Record<BDOCodex.Queries.Types, Types>)
const AppLookup = Object
    .entries(Types)
    .reduce((lookup, [key, value]) => {
        return key in BDOCodex.Queries.Types
            ? { ...lookup, [value]: BDOCodex.Queries.Types[key] }
            : lookup
    }, {} as Record<Types, BDOCodex.Queries.Types>)

export const QueryTypeLookup = {
    toBDOCodexFormat: function (type: Types) {
        return AppLookup[type]
    },
    toAppFormat: function (type: BDOCodex.Queries.Types) {
        return BDOCodexLookup[type]
    },
}