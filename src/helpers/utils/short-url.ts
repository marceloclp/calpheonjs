import { App, BDO } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { EntityLookup } from '@config/entity.lookup'

interface ShortURLDescriptor {
    readonly locale?: App.Locales
    readonly type: BDO.Entities.Types,
    readonly id: string
}

export const composeShortURL = (
    { locale = DefaultLocale, type, id }: ShortURLDescriptor
): string => {
    ;(!id || !type) && console.warn(
        `Failed attempt at building url for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    const codexType = EntityLookup.toBDOCodexFormat(type)
    return `/${locale}/${codexType}/${id}/`
}

export const decomposeShortURL = (shortUrl: string): ShortURLDescriptor => {
    const [locale, type, ...idArgs] = shortUrl.split('/').filter(e => e)
    return {
        locale: locale as App.Locales,
        type: EntityLookup.toBDOFormat(type as any),
        id: idArgs.join('/')
    }
}

// TODO: convert to shortURL.compose and shortURL.decompose
