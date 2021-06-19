import { Matcher } from '@helpers/utils/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getter.type'

export const getRegion: Getter<'region'> = ({ $ }) => {
    const matcher = Matcher.initWith('Region:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { matchedStr, endIdx } = matcher.lastMatch
    return cleanStr(matchedStr.substr(endIdx + 1))
}
