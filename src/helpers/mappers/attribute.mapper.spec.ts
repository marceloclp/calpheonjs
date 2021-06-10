import { BDO, BDOCodex } from '@typings/namespaces'
import { AttributeMapper } from './attribute.mapper'

describe('Attribute Mapper', () => {
    it('should match a BDOCodex attribute to a BDO attribute', () => {
        expect(
            AttributeMapper.toBDO(BDOCodex.Characters.Attributes.BonusDamage)
        ).toBe(BDO.Characters.Attributes.BonusDamage)
    })
    it('should match a BDO attribute to a BDOCodex attribute', () => {
        expect(
            AttributeMapper.toBDOCodex(BDO.Characters.Attributes.BonusDamage)
        ).toBe(BDOCodex.Characters.Attributes.BonusDamage)
    })
})