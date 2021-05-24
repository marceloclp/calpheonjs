import { BDO } from '@typings/namespaces'

export interface Stats<T> extends
    Record<BDO.NPCs.Workers.Attributes, T> {}