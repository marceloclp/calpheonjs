import { BDO, BDOCodex } from '@typings/namespaces'
import { buildLookup } from '@helpers/utils/build-lookup'

export class AttributeMapper {
    private static bdoToCodex = buildLookup(
        BDO.Characters.Attributes,
        BDOCodex.Characters.Attributes,
    )
    private static codexToBDO = buildLookup(
        BDOCodex.Characters.Attributes,
        BDO.Characters.Attributes,
    )

    static toBDO(attr: BDOCodex.Characters.Attributes) {
        return AttributeMapper.codexToBDO[attr]
    }
    static toBDOCodex(attr: BDO.Characters.Attributes) {
        return AttributeMapper.bdoToCodex[attr]
    }
}