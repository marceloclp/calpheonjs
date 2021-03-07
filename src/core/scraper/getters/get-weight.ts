import { App } from '@typings/namespaces'
import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

const WeightDict = {
    [App.Locales.US]: ['Weight:']
}

export const getWeight: Getter<number> = ({ $, locale }) => {
    const matcher = LocaleMatcher(WeightDict, locale)
    const nodes = $('.category_text')
        .parent()
        .contents()
        .toArray()
    const node = nodes.find(node => {
        return matcher.findIn($(node).text())
    })
    if (!node?.data || !matcher.lastMatch) return 0
    const text = node.data.substr(matcher.lastMatch.index)
    return parseNumber(text, 0)
}
