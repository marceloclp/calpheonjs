import { Matcher } from '@helpers/factory/matcher'
import { Getter } from '../../getters.types'

export const getSellable: Getter<
    boolean
> = ({ $ }) => {
    const matcher = Matcher('Sellable')
    const element = $('.outer.item_info td').toArray()
        .find(elem => !!matcher.findIn($(elem).text()))
    if (!element)
        return false
    return !!$(element).find('.glyphicon-ok').length
}
