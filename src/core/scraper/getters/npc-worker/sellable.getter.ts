import { Matcher } from '@helpers/utils/matcher'
import { Getter } from './getter.type'

export const getSellable: Getter<'sellable'> = ({ $ }) => {
    const matcher = Matcher.initWith('Sellable')
    const element = $('.outer.item_info td').toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element)
        return false
    return !!$(element).find('.glyphicon-ok').length
}
