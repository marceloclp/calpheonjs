import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { App, BDOCodex } from '@typings/namespaces'
import { isValidPage } from './utils/is-valid-page'
import { buildScrapeUrl } from './utils/build-scrape-url'

const SupportedEntities = {
    Item: BDOCodex.Entities.Types.Item,
    Knowledge: BDOCodex.Entities.Types.Knowledge,
    MaterialGroup: BDOCodex.Entities.Types.MaterialGroup,
    NPC: BDOCodex.Entities.Types.NPC,
    Quest: BDOCodex.Entities.Types.Quest,
    Design: BDOCodex.Entities.Types.Design,
    Recipe: BDOCodex.Entities.Types.Recipe,
    Processing: BDOCodex.Entities.Types.Processing,
}
type ScrapableEntity = keyof typeof SupportedEntities

interface Options {
    readonly locale?: App.Locales
}
const defaultOptions: Options = {
    locale: App.Locales.US
}

export const Fetch = async (id: string, type: ScrapableEntity, options = defaultOptions) => {
    const locale = options.locale || defaultOptions.locale as App.Locales
    const url = buildScrapeUrl(id, SupportedEntities[type], locale)

    const response = await fetch(url)
    const body = await response.text()

    const $ = cheerio.load(body)
    if (!isValidPage($)) {
        throw new Error()
    }
}