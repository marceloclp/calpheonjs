import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/utils/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { createRef } from '@helpers/utils/create-ref'
import { parseNumber } from '@helpers/utils/parse-number'
import { Entities } from '../../typings'
import { Getter } from './getter.type'

export const getProducts: Getter<'products'> = ({ $ }) => {
    const matcher = Matcher.initWith('Crafting Result')

    const row = $('.outer.item_info td').toArray().find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!row || !matcher.lastMatch) return []

    return $(row).find('img').toArray().map(element => {
        const parent = $(element.parent.parent)
        const shortUrl = parent.attr('href')
        if (!shortUrl) return
        const { type, id } = ShortURL.decompose(shortUrl)

        return createRef({
            id,
            type: type === BDO.Entities.Types.Item
                ? BDO.Entities.Types.Item
                : BDO.Entities.Types.MaterialGroup,
            name: $(row).find(`a[href="${shortUrl}"]`).last().text(),
            icon: $(element).attr('src'),
        }, { amount: parseNumber(parent.text(), 1) })
    }).filter(Boolean) as Entities.Craftable['products']
}
