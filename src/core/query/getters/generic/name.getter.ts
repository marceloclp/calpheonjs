import cheerio from 'cheerio'
import { Getter } from './getter.type'

export const getName: Getter<'name'> = (data) => {
    const $ = cheerio.load(data[2])
    const bold = $('b')
    if ($(bold).text()) return $(bold).text()
    return $('a').text()
}