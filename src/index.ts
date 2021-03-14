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
    const res = Getters.Items.Equipments.getEnhancementStats({
        id: item.id,
        category: item.category,
        locale: App.Locales.US,
        type: item.type as App.Entities.Types,
        $: cheerio.load(html),
    })
    console.log('res', JSON.stringify(res))
}
// test('us.npc.8006')
// test('us.npc.7614')
test('us.item.10002')
// test('us.quest.803-4')
// test('us.npc.23720')
// test('us.item.694302')