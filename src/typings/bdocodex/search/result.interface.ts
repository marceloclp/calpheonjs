export interface Result {
    /** The entity grade. */
    grade: string

    /** The icon subpath. */
    icon: string

    /** The first argument of the icon's path. */
    icon_path: string

    /** The short url to the entity page. */
    link: string

    /** The entity type. */
    link_type: string

    /** The entity name. */
    name: string

    /** The entity type translated to the search language. */
    object_type: string

    /** The entity id. */
    value: string
}