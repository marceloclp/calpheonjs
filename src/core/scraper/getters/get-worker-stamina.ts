import { Matcher } from '@helpers/factory/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getWorkerStamina: Getter<
    number
> = ({ $ }) => {
    const matcher = Matcher(['Stamina'])
    const elements = $('.outer.item_info table tr table[width] td')
        .toArray()
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        if (elem.type !== 'tag' || elem.tagName !== 'td')
            continue
        if (matcher.findIn($(elem).text()))
            return parseNumber($(elements[i+1]).text())
    }
    return 0
}
