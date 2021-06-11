import { BDOCodex } from '@typings/namespaces'
import { Selectors, Modes, BuildableEntity } from '@core/query/typings'
import { Builder } from '@core/query/utils/builder'
import { getQueriedType } from '@core/query/utils/get-queried-type'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { getTestStore } from './get-test-store'
import { decomposeFileKey } from './decompose-file-key'

export class TestLoader<BE extends BuildableEntity> {
    private readonly store = getTestStore<BE>()
    private keys: string[] = [...this.store.keys]

    /** There may be too many entities on a query. Specify a limit to reduce test times. */
    private hydrationLevel?: number
    private entityIds: Record<string, true> = {}

    filterByReturnType<NBE extends BuildableEntity>(type: NBE) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key][0]?.type === type
        })
        return this as unknown as TestLoader<NBE>
    }

    filterByFileId(id: string) {
        this.keys = this.keys.filter(key => {
            return decomposeFileKey(key).id === id
        })
        return this
    }

    filterByEntityId(id: string) {
        this.entityIds[id] = true
        return this
    }

    forHydrationLevel(level: number) {
        this.hydrationLevel = level
        return this
    }

    buildTests(builder: Builder<BE>) {
        type R = Selectors.ReturnEntity<BE>
        return this.keys.reduce((tests, key) => {
            const { mode } = decomposeFileKey(key)
            const data = JSON.parse(this.store.cache[key].trim()) as
                BDOCodex.Query.Response<any>
            
            const items = !!Object.keys(this.entityIds).length
                ? data.aaData.filter((_, i) => this.store.mocks[key][i].id in this.entityIds)
                : data.aaData.slice(0, this.hydrationLevel)

            return tests.concat(items.map((item, i) => [
                TestLoader.buildTestId({ mode, id: this.store.mocks[key][i].id }),
                this.store.mocks[key][i] as R,
                builder.build(item) as unknown as R,
            ]))
        }, [] as [string, R, R][])
    }

    static buildTestId({ mode, id }: { mode: Modes, id: string }) {
        return buildCodexURL({ type: getQueriedType(mode), id }) + ` (ID: ${id})`
    }
}