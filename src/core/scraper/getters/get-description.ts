import { App } from '@typings/namespaces'
import { Chars } from '@typings/utilities'
import { LocaleMatcher, MatcherDict } from '@helpers/factory/locale-matcher'
import { Getter } from './getters.types'

const DescriptionDict: MatcherDict = {
    [App.Locales.US]: ['Description:'],
}

export const getDescription: Getter<string | undefined> = ({ $, locale }) => {
    const matcher = LocaleMatcher(DescriptionDict, locale)
    const rowElements = $('.outer.item_info td').toArray()

    const element = rowElements.find(element => {
        const textContent = $(element).text()
        return !!matcher.findIn(textContent)
    })
    if (!element || !matcher.lastMatch) return

    const { found, index } = matcher.lastMatch

    const startIndex = index + found.length
    let endIndex: number
    
    let breakCount = 0
    const textContent = $(element).text()
    for (endIndex = startIndex; endIndex < textContent.length; endIndex++) {
        const char = textContent[endIndex]
        if (char === Chars.Dash || char === Chars.Hyphen)
            break
        else if (char === Chars.LineBreak)
            breakCount++
        if (breakCount >= 2) break
    }
    return textContent.substring(startIndex, endIndex)
}
