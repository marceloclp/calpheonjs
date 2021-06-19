import { App, BDO } from '@typings/namespaces'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

const MasteryLookup = new LocaleLookup(BDO.LifeSkills.Masteries)
    .forLocale(App.Locales.US, (M) => ({
        'Beginner': M.Beginner,
        'Apprentice': M.Apprentice,
        'Skilled': M.Skilled,
        'Professional': M.Professional,
        'Artisan': M.Artisan,
        'Master': M.Master,
        'Guru': M.Guru,
    }))

export const getMastery: Getter<'mastery'> = ({ $, id, type, locale }) => {
    const lookup = MasteryLookup.init(locale)
    const matcher = Matcher.initWith('Skill level:')

    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) throw new Error()

    const { matchedStr, endIdx } = matcher.lastMatch
    const mastery = matchedStr
        .substr(endIdx + 1)
        .replace(/[0-9]/g, '')
        .trim()
    ;(!lookup.has(mastery)) && console.warn(
        `Unknown mastery "${mastery}" found for /${locale}/${type}/${id}.` +
        App.REPORT_ISSUE_MESSAGE,
    )
    return [lookup.get(mastery), parseNumber(matchedStr, 0)]
}
