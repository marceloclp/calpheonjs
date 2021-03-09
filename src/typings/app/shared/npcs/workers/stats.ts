import { BDO } from '@typings/namespaces'

export interface Stats<T = string> extends
    Record<BDO.NPCs.Workers.Attributes, T> {}
