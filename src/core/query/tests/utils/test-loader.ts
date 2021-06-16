import { BDO } from '@typings/namespaces'
import { Entities, Selectors } from '@core/query/typings'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { decomposeFileKey } from './decompose-file-key'
import { Builder } from '@core/query/builders'
import { TestStore } from './test-store'

export class TestLoader<A extends Entities.As = Entities.As> {
    private readonly store = new TestStore<A>()
    private keys = [...this.store.getKeys()]

    private maxDepthLevel = 2
    private idsLookup = new Map<string, true>()

    filterByAs<NA extends Entities.As>(_as: NA) {
        this.keys = this.keys.filter(key => {
            return this.store.getMocksForFile(key)[0]?.as === _as
        })
        return this as unknown as TestLoader<NA>
    }

    filterByQueriedId(id: string) {
        this.keys = this.keys.filter(key => {
            return decomposeFileKey(key).id === id
        })
        return this
    }

    filterByEntityId(id: string) {
        this.idsLookup.set(id, true)
        return this
    }

    withDepthLevelOf(depth: number) {
        this.maxDepthLevel = depth
        return this
    }

    buildTests() {
        type R = [string, Selectors.Entity<A>, Selectors.Entity<A>]
        return this.keys
            .reduce((tests, key) => {
                return [...tests, ...this.buildTestsFromFile(key)]
            }, [] as R[])
            .slice(0, this.maxDepthLevel)
    }

    private buildTestsFromFile(key: string) {
        type R = Selectors.Entity<A>
        const tests: [string, R, R][] = []
        const { mode } = decomposeFileKey(key)

        for (const [i, entity] of this.store.getMocksForFile(key).entries()) {
            if (this.idsLookup.size && !this.idsLookup.has(entity.id))
                continue
            const { id, type } = entity

            const name = TestLoader.buildTestName({ key, id, type })
            const response = Builder(mode)
                (this.store.getResponseForFile(key)[i])
            tests.push([name, entity, response as R])
        }
        return tests
    }

    static buildTestName({ key, id, type }: { key: string, id: string, type: BDO.Entities.Types }) {
        return `(${key}) ` + buildCodexURL({ id, type })
    }
}