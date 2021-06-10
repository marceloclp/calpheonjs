import { BDOCodex } from '@typings/namespaces'

export interface Descriptor {
    readonly a: BDOCodex.Query.As
    readonly type: BDOCodex.Query.Types
    // readonly id: K extends 'id' ? string : never
    // readonly item_id: K extends 'item_id' ? string : never
}