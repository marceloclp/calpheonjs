import { EntityTypes } from "../../enums";

export interface IReference {
    /** A type may be available if the context is not clear. */
    type?: EntityTypes;

    /** The entity reference id. */
    id: string;

    /** The entity icon url. */
    icon: string;

    /** The entity name in the same language as the scraper. */
    name: string;
}