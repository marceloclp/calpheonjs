import { Matcher } from '@helpers/matcher'
import { Getter } from './getter.type'

export const getSellable: Getter<'sellable'> = ({ $ }) => {
    const matcher = Matcher('Sellable')
    const element = $('.outer.item_info td').toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element)
        return false
    return !!$(element).find('.glyphicon-ok').length
}
