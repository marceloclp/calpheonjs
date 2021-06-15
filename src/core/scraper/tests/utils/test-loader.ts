import cheerio from 'cheerio'
import { App, BDO } from '@typings/namespaces'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { Entities, Selectors } from '@core/scraper/typings'
import { Builder } from '@core/scraper/builders'
import { TestStore } from './test-store'
import { decomposeFileKey } from './decompose-file-key'

export class TestLoader<A extends Entities.As> {
    private readonly store = new TestStore<A>()
    private keys = [...this.store.getKeys()]

    filterByAs<NA extends Entities.As>(_as: NA) {
        this.keys = this.keys.filter(key => {
            return this.store.getMockForFile(key).as === _as
        })
        return this as unknown as TestLoader<NA>
    }

    filterById(id: string) {
        this.keys = this.keys.filter(key => {
            return this.store.getMockForFile(key).id === id
        })
        return this
    }

    buildTests() {
        type R = Selectors.Entity<A>
        return this.keys.map(key => {
            const { locale, type, id } = decomposeFileKey(key)
            const $ = cheerio.load(this.store.getResponseForFile(key))
            const name = TestLoader.buildTestName({ locale, type, id })
            const mock = this.store.getMockForFile(key) as R
            const entity = Builder(type)({ $, locale, type, id }) as R
            return [name, mock, entity] as [string, R, R]
        })
    }

    static buildTestName({ locale, type, id }: {
        locale: App.Locales,
        type: BDO.Entities.Types,
        id: string
    }) {
        return buildCodexURL({ locale, type, id })
    }
}