import { BDO } from '@typings/namespaces'
import { Generic } from './generic.interface'
import { Craftable } from './craftable.interface'
import { As } from './as.enum'

export interface Design extends Generic<As.Design>, Craftable {
    grade: BDO.Grade
}