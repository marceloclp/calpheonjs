import { Entities, Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { parseTime } from '@helpers/utils/parse-time'

export const getCooldown: Getter<
    Entities.Items.Consumable['cooldown']
> = ({ $ }) => {
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
