import { BDO } from '@typings/namespaces'

export interface Stats<T = string> extends
    Partial<Record<BDO.Players.Attributes, T>> {
    /** An NPC may have a level. */
    lvl?: T
    /** An NPC may reward the player with experience points when killed. */
    droppedExp?: T
    /** An NPC may reward the player with skill experience points when killed. */
    droppedSkillExp?: T
    /** The karma given by the NPC when killed. */
    karma?: T
}
