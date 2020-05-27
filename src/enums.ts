/**
 * The supported databases.
 * 
 * Please keep in mind that we recommend using the default database and the
 * tests will only cover the default db.
 * 
 * Maps a database name to its url (eg. `bdocodex.net`).
 */
export enum Dbs {
    /** The default database. */
    BDO_CODEX = 'bdocodex.com',

    BD_DATABASE = 'bddatabase.net',
}

/**
 * The supported entity types.
 * 
 * Maps an entity type to its url subpath (eg. `/item/9203`).
 */
export enum EntityTypes {
    ITEM = 'item',
}

/**
 * The supported languages.
 * 
 * Maps a language to its locale, url subpath (eg. `/us/item/`).
 */
export enum Locales {
    US = 'us',   
}

/**
 * The supported item categories.
 * 
 * Each item has a category (equipment, consumable, etc) which unlocks different
 * properties. Categories that have been accounted to and should be working as
 * intended can be found here.
 */
export enum Categories {
    EQUIPMENT = 'equipment',
    CRAFTING_MATERIAL = 'crafting_material',
    CONSUMABLE = 'consumable',
    INSTALLABLE_OBJECT = 'installable_object',
    UNDEFINED = 'undefined',
}