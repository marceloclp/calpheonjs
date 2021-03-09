import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl } from '@config/constants'

export const buildScrapeUrl = (
    id: string,
    type: BDOCodex.Entities.Types,
    locale: App.Locales
): string => {
    return `${BaseUrl}/${locale}/${type}/${id}/`
}