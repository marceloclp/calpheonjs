import cheerio from 'cheerio'
import { BDOCodex } from '@typings/namespaces'
import { Getter } from '../getter.types'

export const getName: Getter<
    BDOCodex.Queries.Response.Quest,
    string
> = (data) => {
    return cheerio.load(data[2])('a').text()
}