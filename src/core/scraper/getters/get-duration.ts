import { App } from '@typings/namespaces'
import { LocaleMatcher, MatcherDict } from '@helpers/factory/locale-matcher'
import { parseTime } from '@helpers/utils/parse-time'
import { Getter } from './getters.types'

const DurationDict: MatcherDict = {
    [App.Locales.US]: ['Duration'],
}

export const getDuration: Getter<number> = ({ $, locale }) => {
    const matcher = LocaleMatcher(DurationDict, locale)
    
    const elements = $('.outer.item_info td').contents().toArray()
    const matchedIndex = elements.findIndex(element => {
        const text = $(element).text()
        if (!!matcher.findIn(text)) return true
    })
    if (matchedIndex === -1) return 0
    const value = $(elements[matchedIndex + 1]).text()
    return parseTime(value, 0, locale)
}
