import { App } from '@typings/namespaces'
import { DividerChars, GroupBreakChars } from '@config/constants'
import { LocaleMatcher, MatcherDict } from '@helpers/factory/locale-matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getters.types'

const EffectsDict: MatcherDict = {
    [App.Locales.US]: ['- Effect', 'Effect'],
}

export const getEffects: Getter<string[]> = ({ $, locale }) => {
    const matcher = LocaleMatcher(EffectsDict, locale)
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
