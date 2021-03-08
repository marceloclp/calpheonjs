import { App } from '@typings/namespaces'
import { EntityLookup, ReverseEntityLookup } from '@config/lookups'

interface ShortURLDescriptor {
    locale: App.Locales
    type: App.Entities.Types,
    id: string
}

export const composeShortURL = ({ id, locale, type }: ShortURLDescriptor): string => {
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
