import { BDOCodex } from '@typings/namespaces'
import { StatsLookup } from '@helpers/lookups/stats.lookup'
import { cleanStr } from '@helpers/utils/clean-str'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getCaphras: Getter<'caphras'> = ({ $ }) => {
    const html = $('.item_title')
        .first().parent().find('script').first().html()
    if (!html || !html.length)
        return {}
    const text = html.substring(html.indexOf('=') + 1)
    const data = JSON.parse(cleanStr(text, ';\t')) as BDOCodex.Caphras.Data

    return {
        atPlus18: buildCaphrasEnhancement(data[18]),
        atPlus19: buildCaphrasEnhancement(data[19]),
        atPlus20: buildCaphrasEnhancement(data[20]),
    }
}

const buildCaphrasEnhancement = (
    array: BDOCodex.Caphras.Set
) => {
    return array.map(enhancement => ({
        stats: StatsLookup.toBDO(enhancement.stats),
        amount: {
            toNextLevel: parseNumber(enhancement.count, 0),
            toThisLevel: parseNumber(enhancement.tcount, 0),
        }
    }))
}
