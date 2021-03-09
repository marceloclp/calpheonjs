import { BDO } from '@typings/namespaces'

export interface Stats<T = string> extends
    Partial<Record<BDO.Players.Attributes, T>> {
    lvl?: number

    droppedExp?: number

    droppedSkillExp?: number

    karma?: number
}
