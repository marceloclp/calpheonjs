import { BDO, BDOCodex } from '@typings/namespaces'
import { Getter, Entities } from '@core/scraper/typings'
import { mapStats } from '@core/scraper/utils/map-stats'
import { cleanStr } from '@helpers/utils/clean-str'
import { parseNumber } from '@helpers/utils/parse-number'

export const getCaphras: Getter<
    Entities.Items.Equipment['caphras']
> = ({ $ }) => {
    const html = $('.item_title')
        .first().parent().find('script').first().html()
    if (!html || !html.length)
        return {}
    const text = html.substring(html.indexOf('=') + 1)
    const data = JSON.parse(cleanStr(text, ';\t')) as BDOCodex.Shared.Caphras.Data

    return {
        atPlus18: buildCaphrasEnhancement(data[18]),
        atPlus19: buildCaphrasEnhancement(data[19]),
        atPlus20: buildCaphrasEnhancement(data[20]),
    }
}

const buildCaphrasEnhancement = (
    array: BDOCodex.Shared.Caphras.Set
): BDO.Items.Equipments.Caphras[] => {
    return array.map(enhancement => ({
        // TODO: refactor mapStats to accept strings
        stats: mapStats(enhancement.stats),
        amount: {
            toNextLevel: parseNumber(enhancement.count, 0),
            toThisLevel: parseNumber(enhancement.tcount, 0),
        }
    }))
}