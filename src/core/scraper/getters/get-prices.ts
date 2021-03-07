import { App, BDO } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const BuyDict = {
    [App.Locales.US]: ['Buy']
}
const SellDict = {
    [App.Locales.US]: ['Sell']
}
const RepairDict = {
    [App.Locales.US]: ['Repair']
}
const GlobalDict = [BuyDict, SellDict, RepairDict].reduce((obj, dict) => {
    return Object.entries(dict).reduce((obj2, [locale, values]) => {
        return { ...obj2, [locale]: [...obj2[locale] || [], ...values] }
    }, obj)
}, {} as Record<App.Locales, string[]>)

export const getPrices: Getter<BDO.Prices> = ({ $, locale }) => {
    const matchers = {
        buy: LocaleMatcher(BuyDict, locale),
        sell: LocaleMatcher(SellDict, locale),
        repair: LocaleMatcher(RepairDict, locale),
    }
    const globalMatcher = LocaleMatcher(GlobalDict, locale)
    const keys = Object.keys(matchers) as (keyof typeof matchers)[]
    const prices: BDO.Prices = { buy: 0, sell: 0, repair: 0 }

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
