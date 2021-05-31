import { BDO, BDOCodex } from '@typings/namespaces'

const BDOCodexLookup = Object
    .entries(BDOCodex.Entities.Types)
    .reduce((lookup, [key, value]) => {
        return key in BDO.Entities.Types
            ? { ...lookup, [value]: BDO.Entities.Types[key] }
            : lookup
    }, {} as Record<BDOCodex.Entities.Types, BDO.Entities.Types>)
const BDOLookup = Object
    .entries(BDO.Entities.Types)
    .reduce((lookup, [key, value]) => {
        return key in BDOCodex.Entities.Types
            ? { ...lookup, [value]: BDOCodex.Entities.Types[key] }
            : lookup
    }, {} as Record<BDO.Entities.Types, BDOCodex.Entities.Types>)

export const EntityLookup = {
    toBDOCodexFormat: function (type: BDO.Entities.Types) {
        return BDOLookup[type]
    },
    toBDOFormat: function (type: BDOCodex.Entities.Types) {
        return BDOCodexLookup[type]
    },
}