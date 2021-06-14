import { BDOCodex } from '@typings/namespaces'
import { Entities, Selectors } from '@core/query/typings'

export interface TestStore<A extends Entities.As> {
    readonly keys: string[]
    readonly getMock: (key: string) => Selectors.Entity<A>[]
    readonly getResponse: (key: string) => BDOCodex.Query.Response<any>
    readonly as: <NA extends Entities.As>() => TestStore<NA>
}