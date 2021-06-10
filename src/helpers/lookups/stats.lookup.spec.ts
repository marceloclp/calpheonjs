import { BDO, BDOCodex } from '@typings/namespaces'
import { StatsLookup } from './stats.lookup'

describe('Stats Lookup', () => {
    it('should map a BDOCodex stats object to a BDO stats object', () => {
        expect(StatsLookup.toBDO({
            [BDOCodex.Characters.Attributes.BonusAccuracy]: 10,
            [BDOCodex.Characters.Attributes.Damage]: 10,
        })).toMatchObject({
            [BDO.Characters.Attributes.BonusAccuracy]: 10,
            [BDO.Characters.Attributes.Damage]: 10,
        })
    })
    it('should map a BDO stats object to a BDOCodex stats object', () => {
        expect(StatsLookup.toBDOCodex({
            [BDO.Characters.Attributes.BonusAccuracy]: 10,
            [BDO.Characters.Attributes.Damage]: 10,
        })).toMatchObject({
            [BDOCodex.Characters.Attributes.BonusAccuracy]: 10,
            [BDOCodex.Characters.Attributes.Damage]: 10,
        })
    })
    it('should not include invalid stats', () => {
        expect(StatsLookup.toBDO({
            ['invalidStat' as BDOCodex.Characters.Attributes]: 10,
        })).toMatchObject({})
    })
})