import { BDOCodex } from '@typings/namespaces'

export interface Stats<T = string> extends
    Partial<Record<BDOCodex.Characters.Attributes, T>> {}