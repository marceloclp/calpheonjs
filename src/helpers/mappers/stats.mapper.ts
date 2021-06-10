import { BDO, BDOCodex } from '@typings/namespaces'
import { AttributeMapper } from '@helpers/mappers/attribute.mapper'

export class StatsMapper {
    static toBDO<T = string>(
        stats: BDOCodex.Characters.Stats<T>
    ): BDO.Characters.Stats<T> {
        const entries = Object.entries(stats) as
            [BDOCodex.Characters.Attributes, T][]
        return entries.reduce((obj, [stat, value]) => {
            const key = AttributeMapper.toBDO(stat)
            return { ...obj, [key]: value }
        }, {})
    }
    static toBDOCodex<T = string>(
        stats: BDO.Characters.Stats<T>
    ): BDOCodex.Characters.Stats<T> {
        const entries = Object.entries(stats) as
            [BDO.Characters.Attributes, T][]
        return entries.reduce((obj, [stat, value]) => {
            const key = AttributeMapper.toBDOCodex(stat)
            return { ...obj, [key]: value }
        }, {})
    }
}