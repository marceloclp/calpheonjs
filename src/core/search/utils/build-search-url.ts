import { App, BDOCodex } from '@typings/namespaces'
import { BaseUrl, DefaultLocale } from '@config/constants'

interface SearchURLDescriptor {
    readonly locale?: App.Locales
    readonly term: string
}

export function buildSearchURL({ locale = DefaultLocale, term }: SearchURLDescriptor) {
    const params: BDOCodex.Search.Params =
        { l: locale, term }
    return BaseUrl + '/ac.php?' +
        new URLSearchParams({ ...params }).toString()
}