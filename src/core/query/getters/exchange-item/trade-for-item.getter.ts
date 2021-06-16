import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { substrOf } from '@helpers/utils/substr-of'
import { Getter } from './getter.type'

export const getTradeForItem: Getter<'tradeForItem'> = (data) => {
    const $ = cheerio.load('<div>' + data[4] + '</div>')
    const wrapper = $('.iconset_wrapper_medium')
    
    const { id, type } = ShortURL.decompose(
        $(wrapper).find('a').attr('href') as string
    )
    const icon = substrOf(
        $(wrapper).find('.icon_wrapper').text(),
        { left: 'src="', right: '"' },
    )

    ;(type !== BDO.Entities.Types.Item && console.warn(
        `An unexpected entity type appeared as the price for an exchange item. ` +
        'Please open an issue on the GitHub page with the query information so it can be fixed.'
    ))

    return { id, type: type as BDO.Entities.Types.Item, icon }
}