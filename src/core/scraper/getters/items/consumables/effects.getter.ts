import { Entities, Getter } from '@core/scraper/typings'
import { DividerChars, GroupBreakChars } from '@config/constants'
import { Matcher } from '@helpers/matcher'
import { cleanStr } from '@helpers/utils/clean-str'

export const getEffects: Getter<
    Entities.Items.Consumable['effects']
> = ({ $ }) => {
    const matcher = Matcher('- Effect', 'Effect')
    const effects: string[] = []

    const element = $('.outer.item_info td').toArray().find(element => {
        const textContent = $(element).text()
        return !!matcher.findIn(textContent)
    })
    if (!element) return effects

    let startParsing = false, isMatchedNode = false
    for (const child of $(element).contents().toArray()) {
        isMatchedNode = false
        const text = $(child).text()
        if (!startParsing && !!matcher.findIn(text)) {
            startParsing = true; isMatchedNode = true
        }
        if (!startParsing || !matcher.lastMatch) continue

        const firstChar = text.trimLeft()[0]
        if (!isMatchedNode && GroupBreakChars.includes(firstChar))
            break

        let effect = ''
        if (isMatchedNode) {
            // The node that contains the effect may be the same as the one that
            // we matched using the matcher, so we need to remove the match from it.
            let startIdx = text.indexOf(DividerChars)
            if (startIdx !== -1) effect = text.substr(startIdx)
        } else effect = text
        if (effect) effects.push(cleanStr(effect))
    }
    return effects
}
