import { Entities, Getter } from '@core/scraper/typings'
import { Matcher, MatcherMap } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'

const Matches = {
    buy: ['Buy'],
    sell: ['Sell'],
    repair: ['Repair']
}

export const getPrices: Getter<
    Entities.Items.Item['prices']
> = ({ $ }) => {
    const matchers = Object.entries(Matches)
        .reduce((obj, [key, matches]) => {
            return { ...obj, [key]: Matcher(...matches) }
        }, {} as MatcherMap<keyof typeof Matches>)
    const globalMatcher = Matcher(
        ...Object.values(Matches).reduce((arr, curr) => [...arr, ...curr])
    )
    const keys = Object.keys(matchers) as (keyof typeof matchers)[]
    const prices = { buy: 0, sell: 0, repair: 0 }

    const element = $('.outer.item_info td').toArray().find(element => {
        const textContent = $(element).text()
        return !!globalMatcher.findIn(textContent)
    })
    if (!element) return prices

    $(element).contents().each((_, element) => {
        if (element.type !== 'text' || !element.data) return
        keys.forEach(key => {
            if (matchers[key].findIn(element.data as string))
                prices[key] = parseNumber(element.data, 0)
        })
    })
    return prices
}
