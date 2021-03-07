import { LocaleMatcher } from '@helpers/factory/locale-matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { toSnakeCase } from '@helpers/utils/to-snake-case'
import { App, BDO } from '@typings/namespaces'
import { Getter } from './getters.types'

const MasteryLookup: Record<string, BDO.LifeSkills.Masteries.Levels> = {
    'beginner': BDO.LifeSkills.Masteries.Levels.Beginner,
    'apprentice': BDO.LifeSkills.Masteries.Levels.Apprentice,
    'skilled': BDO.LifeSkills.Masteries.Levels.Skilled,
    'professional': BDO.LifeSkills.Masteries.Levels.Professional,
    'artisan': BDO.LifeSkills.Masteries.Levels.Artisan,
    'master': BDO.LifeSkills.Masteries.Levels.Master,
    'guru': BDO.LifeSkills.Masteries.Levels.Guru,
}

const MasteryDict = {
    [App.Locales.US]: ['Skill level:'],
}

export const getMastery: Getter<BDO.LifeSkills.Masteries.Mastery> = ({ $, id, type, locale }) => {
    const matcher = LocaleMatcher(MasteryDict, locale)

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

    return [MasteryLookup[masteryText], parseNumber(masteryText, 1)]
}
