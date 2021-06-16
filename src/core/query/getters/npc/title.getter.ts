import cheerio from 'cheerio'
import { Getter } from './getter.type'

export const getTitle: Getter<'title'> = (data) => {
    const nodes = cheerio.load(data[2])('a')
        .contents().toArray()
    return nodes.find(elem => {
        return elem.type === 'text'
    })?.data?.replace(/<|>/g, '')
}