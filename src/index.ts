import fs from 'fs'
import path from 'path'
import * as Getters from '@core/query/getters'
import * as Builders from '@core/query/builders'
import { App } from '@typings/namespaces'

const readFile = (folder: 'query' | 'scraper', file: string) => {
    const p = path.join(__dirname, `../cache/${folder}/${file}.txt`)
    return fs.readFileSync(p, { encoding: 'utf-8' })
}

const saveResult = (fileName: string, data: string) => {
    fs.writeFileSync(
        path.join(__dirname, '../mocks/query/', fileName + '.json'),
        data,
    )
}

const test = async () => {
    const body = readFile('query', 'quests.questrewards.16002.us').trim()
    const json = JSON.parse(body)
    // console.log(JSON.stringify(Builders.buildQuest(json)))
    // saveResult('quests.questrewards.16002.us', JSON.stringify(Builders.buildQuest(json)))
    // console.log(json.aaData[0][4])
    // console.log('response', Getters.Quests.getRewards(json.aaData[0]))
}
test()

// const test = (id: string) => {
//     const item = require(`../mock/json/${id}.json`)
//     const html = fs.readFileSync(
//         path.resolve(__dirname, `../mock/html/${id}.html`),
//         { encoding: 'utf-8' },
//     )
//     // const res = Getters.Items.Equipments.getEnhancementStats({
//     //     id: item.id,
//     //     category: item.category,
//     //     locale: App.Locales.US,
//     //     type: item.type as App.Entities.Types,
//     //     $: cheerio.load(html),
//     // })
//     // console.log('res', JSON.stringify(res))
// }
// test('us.npc.8006')
// test('us.npc.7614')
// test('us.item.10002')
// test('us.quest.803-4')
// test('us.npc.23720')
// test('us.item.694302')

// const test = async () => {
//     const entity = await Scrape(App.Entities.Types.Recipe, '122')
//     console.log(entity)
// }
// test()