import { Entities } from '@core/scraper/typings'
import { Getter as GetterFn } from '../getter.type'

export type Getter<K extends keyof Entities.Items.Item> =
    GetterFn<Entities.Items.Item[K]>
