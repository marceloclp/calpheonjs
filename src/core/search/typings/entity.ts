import { BDO } from '@typings/namespaces'

export interface Entity {
    /** An entity has an id. */
    readonly id: string

    /** The type of the entity returned. */
    readonly type: BDO.Entities.Types

    /** An entity has a name. */
    readonly name: string

    /** The grade as a number. */
    readonly grade: BDO.Grade

    /** The icon url. */
    readonly icon: string
}