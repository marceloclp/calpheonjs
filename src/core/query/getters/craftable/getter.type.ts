import { Entities, Selectors } from '../../typings'

export type Getter<K extends keyof Entities.RankedCraftable> =
    (data: Selectors.Response) => Entities.RankedCraftable[K]