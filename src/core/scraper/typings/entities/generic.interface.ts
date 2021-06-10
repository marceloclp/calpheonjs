import { BDO } from '@typings/namespaces'

export interface Generic<
    T extends BDO.Entities.Types = any,
    S extends BDO.Entities.SubType<T> = BDO.Entities.SubType<T>
> {
    /** All entities must have an id. */
    id: string

    /** The type allows checking in runtime which type of entity it is. */
    type: T

    /** The sub type further defines an entity and its properties. */
    subType: S

    /** All entities have an icon. */
    icon: string

    /** All entities have a name. */
    name: string

    /** An entity may have an alternative name, usually in korean. */
    nameAlternative?: string
    
    /**
     * An entity may have a short description about what it is or does.
     * 
     * BDOCodex has really inconsistent HTML trees when it comes to the
     * description, so it's extremely hard to find a consistent way to
     * scrape it. Althought for the most cases, it will work fine, there
     * are some edge cases that haven't be solved.
     * 
     * Given the above, support for description has been solved, and
     * althought it can still be scraped and used, it is not being
     * tested right now or improved.
     * 
     * If you know of a consistent way to scrape this field, please open
     * a PR on GitHub.
     */
    description?: string
}