import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'
import { Modes } from '../typings'
import { getQueryDescriptor } from './get-query-descriptor'

interface QueryURLParams {
    readonly locale?: App.Locales
    readonly mode: Modes
    readonly id: string
}

export function buildQueryURL(params: QueryURLParams) {
    const { locale = DefaultLocale, mode, id } = params
    const { as, type } = getQueryDescriptor(mode)
    const descriptor: BDOCodex.Query.Descriptor =
        { a: as, type, id: id, item_id: id, l: locale }
    return BaseUrl + '/query.php?' +
        new URLSearchParams({ ...descriptor }).toString()
}