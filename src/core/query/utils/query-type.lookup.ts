import { BDOCodex } from '@typings/namespaces'
import { Types } from '@core/query/typings'
import { buildLookup } from '@helpers/utils/build-lookup'

export class QueryTypeLookup {
    private static appToCodex = buildLookup(BDOCodex.Query.Types, Types)
    private static codexToApp = buildLookup(Types, BDOCodex.Query.Types)

    static toApp(type: BDOCodex.Query.Types) {
        return this.codexToApp[type] as Types
    }
    static toBDOCodex(type: Types) {
        return this.appToCodex[type] as BDOCodex.Query.Types
    }
}