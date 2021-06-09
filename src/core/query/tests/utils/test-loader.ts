import { BDOCodex } from '@typings/namespaces'
import { Entities, QueryableEntity, Types } from '@core/query/typings'
import { Builder } from '@core/query/utils/builder'
import { getQueriedType } from '@core/query/utils/get-queried-type'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { getTestStore } from './get-test-store'
import { decomposeFileKey } from './decompose-file-key'

export class TestLoader<T extends QueryableEntity> {
    private readonly store = getTestStore<T>()
    private keys: string[] = [...this.store.keys]

    /** There may be too many entities on a query. Specify a limit to reduce test times. */
    private hydrationLevel?: number
    private entityIds: Record<string, true> = {}

    filterByReturnType<NT extends QueryableEntity>(type: NT) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key][0]?.type === type
        })
        return this as unknown as TestLoader<NT>
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

    buildTests(builder: Builder<T>) {
        type R = Entities.Select<T>
        return this.keys.reduce((tests, key) => {
            const { type } = decomposeFileKey(key)
            const data = JSON.parse(this.store.cache[key].trim()) as
                BDOCodex.Query.Response<any>
            
            const items = !!Object.keys(this.entityIds).length
                ? data.aaData.filter((_, i) => this.store.mocks[key][i].id in this.entityIds)
                : data.aaData.slice(0, this.hydrationLevel)

            return tests.concat(items.map((item, i) => [
                TestLoader.buildTestId({ type, id: this.store.mocks[key][i].id }),
                this.store.mocks[key][i] as R,
                builder.build(item) as unknown as R,
            ]))
        }, [] as [string, R, R][])
    }

    static buildTestId({ type, id }: { type: Types, id: string }) {
        return buildCodexURL({ type: getQueriedType(type), id }) + ` (ID: ${id})`
    }
}