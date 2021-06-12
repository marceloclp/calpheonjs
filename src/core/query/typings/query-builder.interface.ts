import { Defined, Diff } from '@typings/utilities'
import { BuildableEntity, Entities, Modes, Selectors } from '.'

export interface QueryBuilder {
    forGeneric: (
        builder: (data: Selectors.Response) =>
            Omit<Defined<Entities.Generic>, 'type' | 'subType'>
    ) => QueryBuilder

    forType: <
        NBE extends BuildableEntity,
        R = Diff<Selectors.ReturnEntity<NBE>, Entities.Generic>
    >(
        type: NBE,
        builder: (data: Selectors.Response<NBE>) =>
            Defined<Omit<R, 'type' | 'subType'>>
    ) => QueryBuilder

    create: (
        pickBuilder: (mode: Modes) => { type: BuildableEntity }
    ) => (mode: Modes, data: Selectors.Response) => Entities.Generic
}