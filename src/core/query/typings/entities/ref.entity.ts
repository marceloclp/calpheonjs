import { EntityTypes } from "../types";

/**
 * A reference entity contains only the most basic information about an entity.
 */
export interface Ref<T = any> {
    type: EntityTypes;

    id: string;

    icon: string;

    shortUrl: string;

    scrape?: () => Promise<T>;
}