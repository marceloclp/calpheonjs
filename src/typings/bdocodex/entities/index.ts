/**
 * BDOCodex entities are not the same as in-game entities.
 * These refer to the URL subpath (e.g., /us/item/id/).
 * 
 * Not all entities are yet supported by CalpheonJS.
 */
export enum Enum {
    Item = 'item',
    ItemSet = 'itemset',
    Quest = 'quest',
    GuildQuest = 'guildquest',
    NPC = 'npc',
    Skill = 'skill',
    Knowledge = 'theme',
    Design = 'design',
    Recipe = 'recipe',
    Processing = 'mrecipe',
    Achievement = 'achievement',
    Title = 'title',
    Pet = 'pet',
    Mount = 'mount',
    Gatherable = 'gatherable',
    Article = 'article',
    Node = 'node',
    Pattern = 'puzzle',
    ShopItem = 'shopitem',
    MaterialGroup = 'materialgroup',
}