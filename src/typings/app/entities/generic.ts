import { App } from '@typings/namespaces'

export interface Generic<T extends App.Entities.Types> {
    /** All entities must have an id. */
    id: string
    /** The type allows checking in runtime which type of entity it is. */
    type: T
    /** All entities have an icon. */
    icon: string
    /** All entities have a name. */
    name: string
    /** An entity may have an alternative name, usually in korean. */
    nameAlternative?: string
    /**
     * An entity may have a description. Scraping descriptions is not
     * always possible due to the HTML structure of BDOCodex pages.
     */
    description?: string
}