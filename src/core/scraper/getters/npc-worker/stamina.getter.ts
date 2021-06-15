import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getStamina: Getter<'stamina'> = ({ $ }) => {
    const matcher = Matcher('Stamina')
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
