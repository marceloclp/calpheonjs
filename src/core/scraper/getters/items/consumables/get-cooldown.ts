import { Matcher } from '@helpers/factory/matcher'
import { parseTime } from '@helpers/utils/parse-time'
import { Getter } from '../../getters.types'

export const getCooldown: Getter<number> = ({ $ }) => {
    const matcher = Matcher('Cooldown')
    const elements = $('.outer.item_info td').contents().toArray()
    const matchedIndex = elements.findIndex(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (matchedIndex === -1) return 0
    const value = $(elements[matchedIndex + 1]).text()
    return parseTime(value, 0)
}
