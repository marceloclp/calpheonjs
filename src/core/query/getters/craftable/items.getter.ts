import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { substrOf } from '@helpers/utils/substr-of'
import { parseNumber } from '@helpers/utils/parse-number'
import { Entities } from '../../typings'
import { Getter } from './getter.type'

export const getItems: Getter<'materials' | 'products', number> = (data, index) => {
    const $ = cheerio.load('<div>' + data[index || 0] + '</div>')

    return $('.iconset_wrapper_medium').toArray().map(elem => {
        const url = $(elem).find('a').attr('href')
        if (!url) return
        const { type, id } = ShortURL.decompose(url)

        return createRef({
            id,
            type: type === BDO.Entities.Types.Item
                ? BDO.Entities.Types.Item
                : BDO.Entities.Types.MaterialGroup,
            icon: substrOf(
                $(elem).find('.icon_wrapper').text(),
                { left: 'src="', right: '"' },
            )
        }, { amount: parseNumber($(elem).find('.quantity_small').text(), 1) })
    }) as Entities.Craftable['materials']
}
