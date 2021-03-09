import { App, BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/factory/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { Getter } from './getters.types'

const MasteryLookup: Record<string, BDO.LifeSkills.Masteries> = {
    'beginner': BDO.LifeSkills.Masteries.Beginner,
    'apprentice': BDO.LifeSkills.Masteries.Apprentice,
    'skilled': BDO.LifeSkills.Masteries.Skilled,
    'professional': BDO.LifeSkills.Masteries.Professional,
    'artisan': BDO.LifeSkills.Masteries.Artisan,
    'master': BDO.LifeSkills.Masteries.Master,
    'guru': BDO.LifeSkills.Masteries.Guru,
}

export const getMastery: Getter<App.Shared.Mastery> = ({ $, id, type, locale }) => {
    const matcher = Matcher(['Skill level:'])

    const elements = $('.category_text')
        .parent().contents().toArray()
    const element = elements.find(element => {
        const text = $(element).text()
        return !!matcher.findIn(text)
    })
    if (!element || !matcher.lastMatch) throw new Error()

    const { str, index, found } = matcher.lastMatch
    const text = str
        .substr(index + found.length + 1)
        .replace(/[0-9]/g, '')

    const masteryText = toSnakeCase(text)
    ;(!(masteryText in MasteryLookup)) && console.warn(
        `Unknown mastery ${masteryText} found for /${locale}/${type}/${id}. ` +
        'Please report this warning by opening an issue on the GitHub page.'
    )

    return [MasteryLookup[masteryText], parseNumber(str, 0)]
}
