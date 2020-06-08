import { EntityTypes } from "../types";

export interface Generic<T = any> {
    /** Indicates whcih properties are to be expected from the object. */
    readonly type: EntityTypes;

    /** An entity has a unique identifier. */
    readonly id: string;

    /** An entity has an icon. */
    readonly icon: string;

    /** An entity has a name. */
    readonly name: string;

    /** A shortened version of the entity url without the database base url. */
    readonly shortUrl: string;

    /** An async function that scrapes the entity page. */
    readonly scrape?: () => Promise<T>;
}