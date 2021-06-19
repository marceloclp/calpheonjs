import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getPrices: Getter<'prices'> = ({ $ }) => {
    const matcher = Matcher.initWithMap({
        buy: 'Buy', sell: 'Sell', repair: 'Repair'
    })
    const prices = { buy: 0, sell: 0, repair: 0 }

    const element = $('.outer.item_info td').toArray().find(element => {
        const textContent = $(element).text()
        return !!matcher.findIn(textContent)
    })
    if (!element) return prices

    $(element).contents().each((_, element) => {
        if (element.type !== 'text' || !element.data) return
        const match = matcher.findIn(element.data)
        if (match) prices[match.candidateKey] = parseNumber(element.data, 0)
    })
    return prices
}
