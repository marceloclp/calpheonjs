import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { parseNumber } from '@helpers/utils/parse-number'
import { toSnakeCase } from '@helpers/utils/to-snake-case'

const Lookup = {
    'naive': BDO.NPCs.Workers.SkillLevels.Naive,
    'general': BDO.NPCs.Workers.SkillLevels.General,
    'skilled': BDO.NPCs.Workers.SkillLevels.Skilled,
    'pro': BDO.NPCs.Workers.SkillLevels.Professional,
    'artisan': BDO.NPCs.Workers.SkillLevels.Artisan,
}

export const getSkillsChance: Getter<
    Record<BDO.NPCs.Workers.SkillLevels, number>
> = ({ $, id, type, locale }) => {
    const matcher = Matcher('Chances of obtaining the skills:')
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
        const lookup = toSnakeCase($(rows[pair]).text())
        if (lookup in Lookup) {
            chances[Lookup[lookup]] = parseNumber($(rows[pair+1]).text())
            continue
        }
        console.warn(
            `Unknown skill level ${lookup} found for /${locale}/${type}/${id}. `,
            'Please report this warning by opening an issue on the GitHub page.'
        )
    }

    return chances
}
