import { App } from '@typings/namespaces'
export { NPC } from './npc'
export { Worker } from './worker'
// TODO: missing lodging npc

export type Category =
    | 'lodging'
    | 'worker'
    | 'other'

export type Select<C extends Category> =
    C extends 'worker'
        ? App.Entities.NPCs.Worker
    : App.Entities.NPCs.NPC
