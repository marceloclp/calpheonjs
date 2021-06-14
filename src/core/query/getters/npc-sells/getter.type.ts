import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.NPCSells> =
    (data: BDOCodex.Query.Responses.NPCSells) => Entities.NPCSells[K]