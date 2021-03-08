import { App, BDOCodex } from '@typings/namespaces'

/** BDOCodex entities to App entities. */
export const EntityLookup: Partial<
    Record<BDOCodex.Entities.Types, App.Entities.Types>
> = Object.entries(BDOCodex.Entities.Types)
    .reduce((obj, [key, value]) => {
        if (!(key in App.Entities.Types))
            return obj
        return { ...obj, [value]: App.Entities.Types[key] }
    }, {})

/** App entities to BDOCodex entities. */
export const ReverseEntityLookup: Partial<
    Record<App.Entities.Types, BDOCodex.Entities.Types>
> = Object.entries(App.Entities.Types)
    .reduce((obj, [key, value]) => {
        if (!(key in BDOCodex.Entities.Types))
            return obj
        return { ...obj, [value]: BDOCodex.Entities.Types[key] }
    }, {})