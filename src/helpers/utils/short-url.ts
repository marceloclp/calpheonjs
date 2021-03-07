import { App } from '@typings/namespaces'

interface ShortURLDescriptor {
    locale: App.Locales
    type: string
    id: string
}

export const ShortUrl = {
    compose: ({ id, locale, type }: ShortURLDescriptor): string | undefined => {
        if (id && locale && type)
            return '/' + [locale, type, id].join('/') + '/'
    },
    decompose: (shortUrl: string): ShortURLDescriptor => {
        const args = shortUrl.split('/').filter(e => e)
        return {
            locale: args[0] as App.Locales,
            type: args[1],
            id: args.slice(2).join('/')
        }
    },
}