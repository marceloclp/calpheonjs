import { App } from '@typings/namespaces'
import { BaseUrl } from '@config/constants'

// TODO: change options to fit our naming patterns
interface QueryDescriptor {
    readonly a: string
    readonly type: string
    readonly l: App.Locales
}

export const buildQueryURL = <T extends QueryDescriptor>(query: T) => {
    return Object.entries(query).reduce((url, [key, value]) => {
        return url + `${key}=${value}&`
    }, BaseUrl + '/query.php?')
}