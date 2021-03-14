import { App } from '@typings/namespaces'
export * as Items from './items'
export * as NPCs from './npcs'
export { Design } from './design'
export { Knowledge } from './knowledge'
export { MaterialGroup } from './material-group'
export { Processing } from './processing'
export { Quest } from './quest'
export { Recipe } from './recipe'
export { WorkerSkill } from './worker-skill'

export enum Types {
    Item = 'item',
    Knowledge = 'knowledge',
    MaterialGroup = 'materialGroup',
    NPC = 'npc',
    Quest = 'quest',
    Recipe = 'recipe',
    Processing = 'processing',
    Design = 'design',
    WorkerSkill = 'workerSkill',
}

export type SelectCategory<T extends Types> =
    T extends Types.Item
        ? App.Entities.Items.Categories
    : T extends Types.NPC
        ? App.Entities.NPCs.Categories
    : never

export type Select<
    T extends Types,
    C extends SelectCategory<T>
> =
    T extends Types.Item
        ? C extends App.Entities.Items.Categories
            ? App.Entities.Items.Select<C>
        : App.Entities.Items.Item
    : T extends Types.Knowledge
        ? App.Entities.Knowledge
    : T extends Types.MaterialGroup
        ? App.Entities.MaterialGroup
    : T extends Types.NPC
        ? C extends App.Entities.NPCs.Categories
            ? App.Entities.NPCs.Select<C>
        : App.Entities.NPCs.NPC
    : T extends Types.Quest
        ? App.Entities.Quest
    : T extends Types.Recipe
        ? App.Entities.Recipe
    : T extends Types.Processing
        ? App.Entities.Processing
    : T extends Types.Design
        ? App.Entities.Design
    : App.Entities.WorkerSkill
