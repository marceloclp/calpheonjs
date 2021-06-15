import { Entities, Selectors } from '../../typings'

export type Getter<K extends keyof Entities.RankedCraftable, E = never> =
    (data: Selectors.Response, extra?: E) => Entities.RankedCraftable[K]