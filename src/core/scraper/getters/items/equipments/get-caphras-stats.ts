import { App, BDOCodex } from '@typings/namespaces'
import { FixedArray } from '@typings/utilities'
import { cleanStr } from '@helpers/utils/clean-str'
import { parseNumber } from '@helpers/utils/parse-number'
import { mapStats } from '../../../utils/map-stats'
import { Getter } from '../../getters.types'

export const getCaphrasStats: Getter<
    App.Shared.Equipments.Caphras.Set | undefined
> = ({ $ }) => {
    const html = $('.item_title')
        .first().parent().find('script').first().html()
    if (!html || !html.length)
        return
    const text = html.substring(html.indexOf('=') + 1)
    const data = JSON.parse(cleanStr(text, ';\t')) as BDOCodex.Caphras.Data

    return {
        atPlus18: buildCaphrasEnhancement(data[18]),
        atPlus19: buildCaphrasEnhancement(data[19]),
        atPlus20: buildCaphrasEnhancement(data[20]),
    }
}

const buildCaphrasEnhancement = (
    array: BDOCodex.Caphras.EnhancementArray
): FixedArray<20, App.Shared.Equipments.Caphras.Level> => {
    return array.map(enhancement => ({
        stats: mapStats(enhancement.stats),
        amount: {
            toNextLevel: parseNumber(enhancement.count, 0),
            toThisLevel: parseNumber(enhancement.tcount, 0),
        }
    })) as unknown as FixedArray<20, App.Shared.Equipments.Caphras.Level>
}