import { BDOCodex } from '@typings/namespaces'

export interface Item extends
    BDOCodex.Query.Responses.Generic {
    
    /** Item id. */
    readonly 0: string

    /** Item grade. */
    readonly 3: number

    readonly 4: string

    readonly 5: string
}