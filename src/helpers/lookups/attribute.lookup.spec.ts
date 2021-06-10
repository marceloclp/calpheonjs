import { BDO, BDOCodex } from '@typings/namespaces'
import { AttributeLookup } from './attribute.lookup'

describe('Attribute Lookup', () => {
    it('should match a BDOCodex attribute to a BDO attribute', () => {
        expect(
            AttributeLookup.toBDO(BDOCodex.Characters.Attributes.BonusDamage)
        ).toBe(BDO.Characters.Attributes.BonusDamage)
    })
    it('should match a BDO attribute to a BDOCodex attribute', () => {
        expect(
            AttributeLookup.toBDOCodex(BDO.Characters.Attributes.BonusDamage)
        ).toBe(BDOCodex.Characters.Attributes.BonusDamage)
    })
})