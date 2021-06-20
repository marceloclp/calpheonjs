import cheerio from 'cheerio'
import fetch from 'node-fetch'
import { DefaultLocale } from '@config/constants'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { ScrapableEntity } from './typings'
import { Builder } from './builders'
import { isScrapableEntity } from './utils/is-scrapable-entity'
import { isValidPage } from './utils/is-valid-page'

export async function Scrape<T extends ScrapableEntity>(type: T, id: string) {
    if (!isScrapableEntity(type)) {
        throw new Error(`Entity of type ${type} is not a scrapable entity.`)
    }
    const url = buildCodexURL({ type, id })
    const $ = await fetch(url)
        .then(response => response.text())
        .then(html => cheerio.load(html))
    if (!isValidPage($)) {
        throw new Error(`Entity of type ${type} and id ${id} does not exist.`)
    }
    return Builder(type)({ $, id, type, locale: DefaultLocale })
}
