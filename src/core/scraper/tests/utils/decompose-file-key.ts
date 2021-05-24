import { App, BDO } from '@typings/namespaces'
import { EntityLookup } from '@config/lookups'

interface Arguments {
    readonly id: string
    readonly type: BDO.Entities.Types
    readonly locale: App.Locales
}

export const decomposeFileKey = (fileKey: string): Arguments => {
    const [locale, codexType, fileId] = fileKey.split('.')
    return {
        id: fileId.replace(/-/g, '/'),
        type: EntityLookup[codexType] as BDO.Entities.Types,
        locale: locale as App.Locales,
    }
}