import { Types } from '@core/query/typings'
import { BDOCodex } from '@typings/namespaces'

const BDOCodexLookup = Object
    .entries(BDOCodex.Query.Types)
    .reduce((lookup, [key, value]) => {
        return key in Types ?
            { ...lookup, [value]: Types[key] }
            : lookup
    }, {} as Record<BDOCodex.Query.Types, Types>)
const AppLookup = Object
    .entries(Types)
    .reduce((lookup, [key, value]) => {
        return key in BDOCodex.Query.Types
            ? { ...lookup, [value]: BDOCodex.Query.Types[key] }
            : lookup
    }, {} as Record<Types, BDOCodex.Query.Types>)

export const QueryTypeLookup = {
    toBDOCodexFormat: function (type: Types) {
        return AppLookup[type]
    },
    toAppFormat: function (type: BDOCodex.Query.Types) {
        return BDOCodexLookup[type]
    },
}