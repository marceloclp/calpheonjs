import cheerio from 'cheerio'
import { BDOCodex } from '@typings/namespaces'
import { substrOf } from '@helpers/utils/substr-of'
import { Getter } from '../getter.types'

export const getIcon: Getter<
    BDOCodex.Queries.Response.Quest,
    string
> = (data) => {
    const text = cheerio.load(data[1])('div').first().text()
    return substrOf(text, { left: 'src="', right: '"' })
}