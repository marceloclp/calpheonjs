import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { Entities, ScrapableEntity } from '@core/scraper/typings'
import { Builder } from '@core/scraper/utils/builder'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { getTestStore } from './get-test-store'
import { decomposeFileKey } from './decompose-file-key'

export class TestLoader<
    T extends ScrapableEntity,
    S extends BDO.Entities.SubType<T> = BDO.Entities.SubType<T>,
> {
    private readonly store = getTestStore<T>()
    private keys: string[] = [...this.store.keys]

    filterByType<NT extends ScrapableEntity>(type: NT) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key].type === type
        })
        return this as unknown as TestLoader<NT>
    }

    filterBySubType<NS extends BDO.Entities.SubType<T>>(subType: NS) {
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
                this.store.mocks[key],
                builder.build({ $, locale, type: type as T, id }),
            ] as unknown as [string, R, R]
        })
    }
}