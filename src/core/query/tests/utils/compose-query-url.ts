import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { getQueryDescriptor } from '@core/query/utils/get-query-descriptor'
import { Modes } from '@core/query/typings'

interface QueryURLParams {
    readonly locale?: App.Locales
    readonly mode: Modes
    readonly id: string
}

export function composeQueryURL(params: QueryURLParams) {
    const { locale = DefaultLocale, mode, id } = params
    const { as, type } = getQueryDescriptor(mode)
    const descriptor: BDOCodex.Query.Descriptor =
        { a: as, type, id: id, item_id: id, l: locale }
    return BaseUrl + '/query.php?' +
        new URLSearchParams({ ...descriptor }).toString()
}