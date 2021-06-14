import { Entities, Selectors } from '../../typings'

export type Getter<K extends keyof Entities.Generic> =
    (data: Selectors.Response) => Entities.Generic[K]