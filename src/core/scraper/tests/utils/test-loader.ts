import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { Entities, ScrapableEntity } from '@core/scraper/typings'
import { buildCodexURL } from '@helpers/utils/build-codex-url'

import { getStore } from '@tests/utils/get-store'
import { decomposeFileKey } from './decompose-file-key'
import { Builder } from '@core/scraper/utils/builder'

export class TestLoader<
    T extends ScrapableEntity,
    S extends BDO.Entities.GetSubType<T> = BDO.Entities.GetSubType<T>,
> {
    private readonly store = getStore('scraper')
    private keys: string[] = [...this.store.keys]

    filterByType<NT extends ScrapableEntity>(type: NT) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key].type === type
        })
        return this as unknown as TestLoader<NT>
    }

    filterBySubType<NS extends BDO.Entities.GetSubType<T>>(subType: NS) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key].subType === subType
        })
        return this as unknown as TestLoader<T, NS>
    }

    filterById(id: string) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key].id === id
        })
        return this
    }

    buildTests(builder: Builder<T>) {
        type R = Entities.Select<T, S>
        return this.keys.map(key => {
            const { locale, type, id } = decomposeFileKey(key)
            const $ = cheerio.load(this.store.cache[key])
            return [
                buildCodexURL({ locale, type, id }),
                this.store.mocks[key] as Entities.Select<T, S>,
                builder.build({ $, locale, type: type as T, id }),
            ] as [string, R, R]
        })
    }
}