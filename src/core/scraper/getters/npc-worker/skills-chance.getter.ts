import { App, BDO } from '@typings/namespaces'
import { LocaleLookup } from '@helpers/utils/locale-lookup'
import { Matcher } from '@helpers/utils/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

const LevelLookup = new LocaleLookup(BDO.NPCs.Workers.SkillLevels)
    .forLocale(App.Locales.US, (SL) => ({
        'Naive': SL.Naive,
        'General': SL.General,
        'Skilled': SL.Skilled,
        'Pro': SL.Professional,
        'Artisan': SL.Artisan,
    }))

export const getSkillsChance: Getter<'acquireChanceTable'> = ({ $, id, type, locale }) => {
    const lookup = LevelLookup.init(locale)
    const matcher = Matcher.initWith('Chances of obtaining the skills:')
    const chances = {} as Record<BDO.NPCs.Workers.SkillLevels, number>

    const elements = $('.outer.item_info td')
        .contents().toArray()
    let idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (idx === -1)
        return chances
    while (idx < elements.length) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'table')
            break
        idx++
    }

    const rows = $(elements[idx]).find('td')
    // Jump the first two elements as they are the headers.
    for (let pair = 2; pair < rows.length; pair += 2) {
        const skillLevel = $(rows[pair]).text().trim()
        ;(!lookup.has(skillLevel)) && console.warn(
            `Unknown skill level ${skillLevel} found for /${locale}/${type}/${id}.`,
            App.REPORT_ISSUE_MESSAGE,
        )
        chances[lookup.get(skillLevel)] =
            parseNumber($(rows[pair+1]).text())
    }
    return chances
}
