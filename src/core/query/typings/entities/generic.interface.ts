import { Selectors } from '../index'
import { As } from './as.enum'

export interface Generic<A extends As = As> {
    /** All entities must have an id. */
    id: string

    /** Defines which properties the entity has in runtime. */
    as: A

    /** The type of entity that will be returned on scrape(). */
    type: Selectors.BDOType<A>

    /** All entities have a name. */
    name: string

    /** All entities have an icon. */
    icon: string
}