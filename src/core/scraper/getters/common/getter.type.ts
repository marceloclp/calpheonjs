import { Entities } from '@core/scraper/typings'
import { Getter as GetterFn } from '../getter.type'

export type Getter<K extends keyof Entities.Generic> =
    GetterFn<Entities.Generic[K]>
