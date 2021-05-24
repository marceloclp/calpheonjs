import { BDO } from '@typings/namespaces'

export interface Stats<T> extends
    Partial<Record<BDO.Characters.Attributes, T>> {}