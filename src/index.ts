import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { App } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'

const test = (id: string) => {
    const item = require(`../mock/json/${id}.json`)
    const html = fs.readFileSync(
        path.resolve(__dirname, `../mock/html/${id}.html`),
        { encoding: 'utf-8' },
    )
    const res = Getters.getEnhancementStats({
        id: item.id,
        category: item.category as App.Entities.Categories,
        locale: App.Locales.US,
        type: item.type as App.Entities.Types,
        $: cheerio.load(html),
    })
    console.log('res', res[0].effects)
}
test('us.item.694302')