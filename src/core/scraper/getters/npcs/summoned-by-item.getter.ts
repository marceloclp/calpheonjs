import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { decomposeShortURL } from '@helpers/utils/short-url'

export const getSummonedByItem: Getter<
    BDO.Refs.Item | undefined
> = ({ $ }) => {
    const ref: Partial<BDO.Refs.Item> = {
        type: BDO.Entities.Types.Item
    }

    // To simplify things, we will assume the HTML structure is consistent.
    // This may not always be the case, but this can be improved later.
    const matcher = Matcher('Summoned by item:')
    const element = $('.outer.item_info td').toArray().find(elem => {
        return !!matcher.findIn($(elem).text())
    })
    const elements = $(element).contents().toArray()
    const idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    
    const anchor = $(elements[idx+4])
    const url = anchor.attr('href')
    if (!url) return

    ref.icon = $(elements[idx+2]).find('img').attr('src') as string
    ref.name = anchor.text()
    ref.id = decomposeShortURL(url).id

    if (ref.id) return ref as BDO.Refs.Item
}
