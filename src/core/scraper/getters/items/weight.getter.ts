import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getWeight: Getter<'weight'> = ({ $ }) => {
    const matcher = Matcher('Weight:')
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
