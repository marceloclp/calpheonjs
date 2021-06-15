import { BDO } from '@typings/namespaces'
import { Matcher, MatcherMap } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

const Matches: Partial<Record<keyof BDO.NPCs.DroppedExp, string[]>> = {
    base: ['XP:'],
    skill: ['Skill XP:'],
}

export const getDroppedExp: Getter<'droppedExp'> = ({ $ }) => {
    const matchers = Object.entries(Matches)
        .reduce((obj, [name, matches]) => {
            if (!matches) return obj
            return { ...obj, [name]: Matcher(...matches) }
        }, {} as MatcherMap<keyof BDO.NPCs.DroppedExp>)
    const droppedExp: BDO.NPCs.DroppedExp = {}

    $('.titles_cell').contents().toArray().forEach(elem => {
        const text = $(elem).text()
        const key = Object.keys(matchers).find(key => {
            return !matchers[key].lastMatch && !!matchers[key].findIn(text)
        })
        if (key) droppedExp[key] = parseNumber(text)
    })
    return droppedExp
}