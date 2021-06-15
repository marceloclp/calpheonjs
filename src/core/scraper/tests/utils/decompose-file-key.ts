import { App } from '@typings/namespaces'
import { EntityLookup } from '@helpers/lookups/entity.lookup'
import { ScrapableEntity } from '@core/scraper/typings'

interface Arguments {
    readonly id: string
    readonly type: ScrapableEntity
    readonly locale: App.Locales
}

export const decomposeFileKey = (fileKey: string): Arguments => {
    const [locale, codexType, fileId] = fileKey.split('.')
    return {
        id: fileId.replace(/-/g, '/'),
        type: EntityLookup.toBDO(codexType as any) as ScrapableEntity,
        locale: locale as App.Locales,
    }
}