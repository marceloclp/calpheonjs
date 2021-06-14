import { BDOCodex } from '@typings/namespaces'

/**
 * Describes a query.
 * 
 * The key used to refer to the queried entity id is not
 * always consistent. Sometimes it's named as `id` or
 * as `item_id`.
 * 
 * To reduce the amount of mapping required, we just inject
 * all possible key names in the query.
 */
export interface Descriptor {
    readonly a: BDOCodex.Query.As
    readonly type: BDOCodex.Query.Types
    readonly id: string
    readonly item_id: string
    readonly l: string
}