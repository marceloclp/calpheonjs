import cheerio from 'cheerio'
import { substrOf } from '@helpers/utils/substr-of'
import { Getter } from './getter.type'

export const getIcon: Getter<'icon'> = (data) => {
    const text = cheerio.load(data[1])('div')
        .first().text()
    return substrOf(text, { left: 'src="', right: '"' })
}
