import { BDOCodex } from '@typings/namespaces'
import { Entities } from '../../typings'

export type Getter<K extends keyof Entities.Node> =
    (data: BDOCodex.Query.Responses.Node) => Entities.Node[K]