import { BDO, BDOCodex } from '@typings/namespaces'
import { EntityLookup } from './entity.lookup'

describe('Entity Lookup', () => {
    it('should match a BDOCodex entity to a BDO entity', () => {
        expect(
            EntityLookup.toBDO(BDOCodex.Entities.Types.MaterialGroup)
        ).toBe(BDO.Entities.Types.MaterialGroup)
    })
    it('should match a BDO entity to a BDOCodex entity', () => {
        expect(
            EntityLookup.toBDOCodex(BDO.Entities.Types.MaterialGroup)
        ).toBe(BDOCodex.Entities.Types.MaterialGroup)
    })
})