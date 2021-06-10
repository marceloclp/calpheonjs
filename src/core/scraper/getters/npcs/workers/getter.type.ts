import { Entities } from '@core/scraper/typings'
import { Getter as GetterFn } from '../../getter.type'

export type Getter<K extends keyof Entities.NPCs.Worker> =
    GetterFn<Entities.NPCs.Worker[K]>
