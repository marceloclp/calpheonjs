import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getLevel: Getter<'level'> = ({ $ }) => {
    const matcher = Matcher('Level:')

    for (const elem of $('.titles_cell').contents().toArray()) {
        const text = $(elem).text()
        if (matcher.findIn(text))
            return parseNumber(text)
    }
}