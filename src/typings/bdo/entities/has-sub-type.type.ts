import { BDO } from '@typings/namespaces'
import { GetSubType } from './get-sub-type.type'

export type HasSubType<T extends BDO.Entities.Types> =
    GetSubType<T> extends undefined ? false : true