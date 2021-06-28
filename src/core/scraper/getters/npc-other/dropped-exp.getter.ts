import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getDroppedExp: Getter<'droppedExp'> = ({ $ }) => {
    const matcher = Matcher.initWithMap({
        base: 'XP:',
        skill: 'Skill XP',
    })
    const droppedExp = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const match = matcher.findIn(text)
        if (match) droppedExp[match.candidateKey] = parseNumber(text)
    })
    return droppedExp
}
