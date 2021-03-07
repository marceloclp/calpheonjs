import { BaseUrl } from '@config/constants'
import { App, BDOCodex } from '@typings/index'

export const buildScrapeUrl = (
    id: string,
    type: BDOCodex.Entities.Enum,
    locale: App.Locales
): string => {
    return `${BaseUrl}/${locale}/${type}/${id}/`
}