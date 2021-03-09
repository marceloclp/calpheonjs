import { Matcher } from '@helpers/factory/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getWeight: Getter<number> = ({ $ }) => {
    const matcher = Matcher(['Weight:'])
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
