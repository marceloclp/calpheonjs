import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'

export const getSellable: Getter<boolean> = ({ $ }) => {
    const matcher = Matcher('Sellable')
    const element = $('.outer.item_info td').toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element)
        return false
    return !!$(element).find('.glyphicon-ok').length
}
