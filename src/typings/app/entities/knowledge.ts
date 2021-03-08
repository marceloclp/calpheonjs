import { App } from '@typings/namespaces'
import { Generic } from './generic'

export interface Knowledge extends Generic<App.Entities.Types.Knowledge> {
    /** The knowledge group it belongs to, if available. */
    group?: string
    /** The entity the knowledge can be acquired from. */
    obtainedFrom?: App.Refs.NPC | App.Refs.Quest
}
