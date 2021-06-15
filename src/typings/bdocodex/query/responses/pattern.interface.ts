import { BDOCodex } from '@typings/namespaces'

export interface Pattern extends
    BDOCodex.Query.Responses.Generic {
    
    /** Pattern id. */
    readonly 0: string

    /** HTML string containg the materials. */
    readonly 3: string

    /** HTML string containing the products. */
    readonly 4: string
}