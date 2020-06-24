export interface Generic {
    /** The entity id. */
    id: string;

    /** The entity icon. */
    icon: string;

    /** The entity name. */
    name: string;

    /** The entity alternative name if available. */
    name_alt?: string;

    /** The entity type. */
    type: string;

    /** The entity category if available. */
    category?: string;

    /** The entity description if available. */
    description?: string;
}