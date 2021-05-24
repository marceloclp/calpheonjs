import { App, BDO } from '@typings/namespaces'
import { EntityLookup, ReverseEntityLookup } from '@config/lookups'

interface ShortURLDescriptor {
    readonly locale: App.Locales
    readonly type: BDO.Entities.Types,
    readonly id: string
}

export const composeShortURL = (
    { locale, type, id }: ShortURLDescriptor
): string => {
    (!id || !locale || !type) && console.warn(
        `Failed attempt at building url for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    const codexType = ReverseEntityLookup[type]
    return `/${locale}/${codexType}/${id}/`
}

export const decomposeShortURL = (shortUrl: string): ShortURLDescriptor => {
    const [locale, type, ...idArgs] = shortUrl.split('/').filter(e => e)
    return {
        locale: locale as App.Locales,
        type: EntityLookup[type] || type,
        id: idArgs.join('/')
    }
}
