import { Selectors } from '../index'
import { As } from './as.enum'

export interface Generic<A extends As = As> {
    /** Defines which properties the entity has in runtime. */
    as: A

    /** All entities must have an id. */
    id: string

    /** The type of entity that will be returned on scrape(). */
    type: Selectors.BDOType<A>

    /** All entities have a name. */
    name: string

    /** All entities have an icon. */
    icon: string
}