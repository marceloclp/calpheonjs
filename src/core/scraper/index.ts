import fetch from 'node-fetch'
import cheerio from 'cheerio'
import { App, BDOCodex } from '@typings/namespaces'
import { isValidPage } from './utils/is-valid-page'
import { buildScrapeUrl } from './utils/build-scrape-url'

const SupportedEntities = {
    Item: BDOCodex.Entities.Enum.Item,
    Knowledge: BDOCodex.Entities.Enum.Knowledge,
    MaterialGroup: BDOCodex.Entities.Enum.MaterialGroup,
    NPC: BDOCodex.Entities.Enum.NPC,
    Quest: BDOCodex.Entities.Enum.Quest,
    Design: BDOCodex.Entities.Enum.Design,
    Recipe: BDOCodex.Entities.Enum.Recipe,
    Processing: BDOCodex.Entities.Enum.Processing,
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