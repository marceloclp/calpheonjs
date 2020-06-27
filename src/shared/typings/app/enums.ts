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
 * The supported languages.
 * 
 * Maps a language to its locale, url subpath (eg. `/us/item/`).
 */
export enum Locales {
    US = 'us',
}