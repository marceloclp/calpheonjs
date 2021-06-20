import { QueryModes, QuerySelectors } from '@core/query'
import { Selectors } from '../index'
import { As } from './as.enum'

export interface Generic<A extends As = As> {
    /** Defines which properties the entity has in runtime. */
    as: A

    /** All entities must have an id. */
    id: string

    /** The type of entity returned. */
    type: Selectors.BDOType<A>

    /** All entities have an icon. */
    icon: string

    /** All entities have a name. */
    name: string

    /** An entity may have an alternative name, usually in korean. */
    nameAlternative?: string
    
    /**
     * @deprecated
     * 
     * An entity may have a description about what it is or does.
     * 
     * BDOCodex has really inconsistent HTML when it comes to the
     * description, so it's extremely hard to find a consistent way to
     * scrape this field. It works for most cases, but there are some
     * edges that couldn't be solved.
     * 
     * For this reason this field is now deprecated, and although it can
     * still be used, it's not reliable enough to be used in production.
     */
    description?: string

    query: Partial<{
        [Mode in QueryModes]:
            () => Promise<QuerySelectors.ReturnedEntity<Mode>>
    }>
}