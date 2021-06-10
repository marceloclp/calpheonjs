import { BDO, BDOCodex } from '@typings/namespaces'
import { buildLookup } from '@helpers/utils/build-lookup'

export class EntityLookup {
    private static bdoToCodex = buildLookup(
        BDO.Entities.Types,
        BDOCodex.Entities.Types,
    )
    private static codexToBDO = buildLookup(
        BDOCodex.Entities.Types,
        BDO.Entities.Types,
    )

    static toBDO(type: BDOCodex.Entities.Types) {
        return this.codexToBDO[type] as BDO.Entities.Types
    }
    static toBDOCodex(type: BDO.Entities.Types) {
        return this.bdoToCodex[type] as BDOCodex.Entities.Types
    }
}