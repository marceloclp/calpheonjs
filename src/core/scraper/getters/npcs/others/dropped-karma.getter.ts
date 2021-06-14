import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getDroppedKarma: Getter<'droppedKarma'> = ({ $ }) => {
    const matcher = Matcher('Karma:')

    for (const elem of $('.titles_cell').contents().toArray()) {
        const text = $(elem).text()
        if (matcher.findIn(text))
            return parseNumber(text)
    }
    return 0
}