import { Entities } from '@core/scraper/typings'
import { Getter as GetterFn } from '../getter.type'

export type Getter<K extends keyof Entities.Processing> =
    GetterFn<Entities.Processing[K]>
