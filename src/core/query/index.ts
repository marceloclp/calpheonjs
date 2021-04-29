import fetch from 'node-fetch'
import { App } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { Types } from './typings/types'
import { buildQueryURL } from './utils/build-query-url'

interface Options {
    readonly locale?: App.Locales
}

export const Query = async (
    type: Types,
    id: string,
    options?: Options
): Promise<any[]> => {
    const locale = options?.locale || DefaultLocale
    const url = buildQueryURL({
        a: 'quests',
        type: 'questrewards',
        id: '16002',
        l: locale,
    })
    console.log(url)

    const response = await fetch(url)
    const body = await response.text()

    console.log(JSON.parse(body.trim()), null, 2)

    return []
}