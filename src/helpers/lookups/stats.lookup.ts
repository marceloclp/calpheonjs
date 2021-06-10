import { BDO, BDOCodex } from '@typings/namespaces'
import { AttributeLookup } from '@helpers/lookups/attribute.lookup'

export class StatsLookup {
    static toBDO<T = string>(
        stats: BDOCodex.Characters.Stats<T>
    ): BDO.Characters.Stats<T> {
        const entries = Object.entries(stats) as
            [BDOCodex.Characters.Attributes, T][]
        return entries.reduce((obj, [stat, value]) => {
            const key = AttributeLookup.toBDO(stat)
            return key ? { ...obj, [key]: value } : obj
        }, {})
    }
    static toBDOCodex<T = string>(
        stats: BDO.Characters.Stats<T>
    ): BDOCodex.Characters.Stats<T> {
        const entries = Object.entries(stats) as
            [BDO.Characters.Attributes, T][]
        return entries.reduce((obj, [stat, value]) => {
            const key = AttributeLookup.toBDOCodex(stat)
            return key ? { ...obj, [key]: value } : obj
        }, {})
    }
}