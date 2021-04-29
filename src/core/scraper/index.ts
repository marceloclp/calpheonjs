import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { App } from '@typings/namespaces'
import { DefaultLocale } from '@config/constants'
import { InvalidEntity } from '@core/errors/invalid-entity'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { isValidPage } from './utils/is-valid-page'
import { Build } from './builders'

type ScrapableEntity =
    | App.Entities.Types.Item
    | App.Entities.Types.Knowledge
    | App.Entities.Types.MaterialGroup
    | App.Entities.Types.NPC
    | App.Entities.Types.Processing
    | App.Entities.Types.Quest
    | App.Entities.Types.Recipe

interface Options {
    readonly locale?: App.Locales
}

export const Scrape = async <T extends ScrapableEntity>(
    type: T,
    id: string,
    options?: Options
): Promise<App.Entities.Select<T, any>> => {
    const locale = options?.locale || DefaultLocale
    const url = buildCodexURL({ locale, type, id })

    const response = await fetch(url)
    const body = await response.text()

    const $ = cheerio.load(body)
    if (!isValidPage($)) {
        throw new InvalidEntity(id, type, locale)
    }
    return Build(type)({ $, id, type, locale })
}
