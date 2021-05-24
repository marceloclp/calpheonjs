import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { cleanStr } from '@helpers/utils/clean-str'

export const getRegion: Getter<
    string | undefined
> = ({ $ }) => {
    const matcher = Matcher('Region:')
    $('.titles_cell').contents().toArray().find(elem => {
        return matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    const { str, index, found } = matcher.lastMatch
    return cleanStr(str.substr(index + found.length + 1))
}
