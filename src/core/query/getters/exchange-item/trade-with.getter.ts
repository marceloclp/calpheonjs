import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { Getter } from './getter.type'

export const getTradeWith: Getter<'tradeWith'> = (data) => {
    const $ = cheerio.load('<div>' + data[5] + '</div>')
    return $('div').children().toArray().map(elem => {
        const { id } = ShortURL.decompose(
            $(elem).attr('href') as string
        )
        const name = $(elem).text()
        return createRef({ id, type: BDO.Entities.Types.NPC, name })
    })
}
