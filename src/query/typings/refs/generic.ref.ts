import { EntityTypes } from "../types";

export interface Generic {
    type: EntityTypes;

    /** The entity id if available. */
    id?: string;

    /** The entity icon if available. */
    icon?: string;

    /** The short url if available. */
    shortUrl?: string;
}