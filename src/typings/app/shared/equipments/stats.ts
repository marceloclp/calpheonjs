import { BDO } from '@typings/namespaces'

export interface Stats<T = string> extends
    Partial<Record<BDO.Players.Attributes, T>> {}
