import { App, BDOCodex } from '@typings/namespaces'

interface ShortURLDescriptor {
    locale: App.Locales
    type: BDOCodex.Entities.Types
    id: string
}

export const composeShortURL = ({ id, locale, type }: ShortURLDescriptor): string => {
    (!id || !locale || !type) && console.warn(
        `Failed attempt at building url for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )
    return `/${locale}/${type}/${id}/`
}

export const decomposeShortURL = (shortUrl: string): ShortURLDescriptor => {
    const args = shortUrl.split('/').filter(e => e)
    return {
        locale: args[0] as App.Locales,
        type: args[1] as BDOCodex.Entities.Types,
        id: args.slice(2).join('/')
    }
}
