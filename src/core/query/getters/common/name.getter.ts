import cheerio from 'cheerio'
import { Getter } from './getter.type'

export const getName: Getter<'name'> = (data) => {
    return cheerio.load(data[2])('a').text()
}