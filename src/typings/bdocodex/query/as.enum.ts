/**
 * This defines the return type of a query.
 * 
 * Query return objects are not mapped 1:1 to entity types,
 * and different As may point to the same entity type, but
 * contain different properties.
 * 
 * For example, As.Drop and As.NPC both return entities of
 * type NPC, but contain different fields.
 */
export enum As {
    Recipe = 'recipes',
    Processing = 'mrecipes',
    Design = 'designs',
    Drop = 'drop',
    Quest = 'quests',
    NPC = 'npcs',
}