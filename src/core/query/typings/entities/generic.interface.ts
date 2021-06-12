import { BDO } from '@typings/namespaces'

export interface Generic<
    T extends BDO.Entities.Types = BDO.Entities.Types,
> {
    /** All entities must have an id. */
    id: string

    /** The type defines which properties the entity has. */
    type: T

    /** All entities have a name. */
    name: string

    /** All entities have an icon. */
    icon: string
}