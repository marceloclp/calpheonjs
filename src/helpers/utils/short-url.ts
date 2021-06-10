import { App, BDO } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { EntityLookup } from '@helpers/lookups/entity.lookup'

interface ShortURLDescriptor {
    readonly locale?: App.Locales
    readonly type: BDO.Entities.Types,
    readonly id: string
}

export class ShortURL {
    static compose(
        { locale = DefaultLocale, type, id }: ShortURLDescriptor
    ): string {
        ;(!id || !type) && console.warn(
            `Failed attempt at building url for /${locale}/${type}/${id}. ` +
            'Please report this warning by opening an issue on the GitHub page.'
        )
        return `/${locale}/${EntityLookup.toBDOCodex(type)}/${id}}`
    }
    static decompose(url: string): ShortURLDescriptor {
        const [locale, type, ...idArgs] = url
            .split('/').filter(e => e)
        return {
            locale: locale as App.Locales,
            type: EntityLookup.toBDO(type as any),
            id: idArgs.join('/'),
        }
    }
}