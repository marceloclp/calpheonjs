import { BDO, BDOCodex } from '@typings/namespaces'
import { StatsMapper } from './stats.mapper'

describe('Stats Mapper', () => {
    it('should map a BDOCodex stats object to a BDO stats object', () => {
        expect(StatsMapper.toBDO({
            [BDOCodex.Characters.Attributes.BonusAccuracy]: 10,
            [BDOCodex.Characters.Attributes.Damage]: 10,
        })).toMatchObject({
            [BDO.Characters.Attributes.BonusAccuracy]: 10,
            [BDO.Characters.Attributes.Damage]: 10,
        })
    })
    it('should map a BDO stats object to a BDOCodex stats object', () => {
        expect(StatsMapper.toBDOCodex({
            [BDO.Characters.Attributes.BonusAccuracy]: 10,
            [BDO.Characters.Attributes.Damage]: 10,
        })).toMatchObject({
            [BDOCodex.Characters.Attributes.BonusAccuracy]: 10,
            [BDOCodex.Characters.Attributes.Damage]: 10,
        })
    })
    it('should not include invalid stats', () => {
        expect(StatsMapper.toBDO({
            ['invalidStat' as BDOCodex.Characters.Attributes]: 10,
        })).toMatchObject({})
    })
})