import { App } from '@typings/namespaces'
export * as Items from './items'
export * as NPCs from './npc'
export { Knowledge } from './knowledge'
export { MaterialGroup } from './material-group'
export { Recipe } from './recipe'
export { Processing } from './processing'
export { Design } from './design'

export enum Types {
    Item = 'item',
    Knowledge = 'knowledge',
    MaterialGroup = 'materialGroup',
    NPC = 'npc',
    Quest = 'quest',
    Recipe = 'recipe',
    Processing = 'processing',
    Design = 'design',
}

/** All entities categories. */
export type Categories =
    | App.Entities.Items.Category
    | App.Entities.NPCs.Category
