import { App, BDO } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { EntityLookup } from '@config/entity.lookup'

interface URLDescriptor {
    readonly locale?: App.Locales
    readonly type: BDO.Entities.Types
    readonly id: string
}

export const buildCodexURL = ({ locale = DefaultLocale, type, id }: URLDescriptor) => {
    const codexType = EntityLookup.toBDOCodexFormat(type)
    return `${BaseUrl}/${locale}/${codexType}/${id}/`
}