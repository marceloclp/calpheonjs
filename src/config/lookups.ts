import { BDO, BDOCodex } from '@typings/namespaces'

/** BDOCodex entities to BDO entities. */
export const EntityLookup: Partial<
    Record<BDOCodex.Entities.Types, BDO.Entities.Types>
> = Object.entries(BDOCodex.Entities.Types)
    .reduce((obj, [key, value]) => {
        if (!(key in BDO.Entities.Types))
            return obj
        return { ...obj, [value]: BDO.Entities.Types[key] }
    }, {})

/** BDO entities to BDOCodex entities. */
export const ReverseEntityLookup: Partial<
    Record<BDO.Entities.Types, BDOCodex.Entities.Types>
> = Object.entries(BDO.Entities.Types)
    .reduce((obj, [key, value]) => {
        if (!(key in BDOCodex.Entities.Types))
            return obj
        return { ...obj, [value]: BDOCodex.Entities.Types[key] }
    }, {})