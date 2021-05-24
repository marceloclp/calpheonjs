import { Entities, Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'

export const getFairyExp: Getter<
    Entities.Items.Equipment['fairyExp']
> = ({ $ }) => {
    const matcher = Matcher('Used as Fairy growth item')

    $('.outer.item_info td').contents().toArray().find(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (!matcher.lastMatch) return 0

    return parseNumber(matcher.lastMatch.str, 0)
}
