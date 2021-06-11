import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { Craftable } from './craftable.interface'

export interface Design extends
    Generic<BDO.Entities.Types.Recipe>,
    Craftable {

    grade: BDO.Grade
}