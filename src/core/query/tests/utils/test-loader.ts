import { BDOCodex } from '@typings/namespaces'
import { Entities, QueryableEntity } from '@core/query/typings'
import { Builder } from '@core/query/utils/builder'
import { buildCodexURL } from '@helpers/utils/build-codex-url'
import { decomposeFileKey } from './decompose-file-key'
import { getTestStore } from './get-test-store'

export class TestLoader<T extends QueryableEntity> {
    private readonly store = getTestStore<T>()
    private keys: string[] = [...this.store.keys]

    /** There may be too many entities on a query. Specify a limit to reduce test times. */
    private hydrationLevel?: number

    filterByReturnType<NT extends QueryableEntity>(type: NT) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key][0]?.type === type
        })
        return this as unknown as TestLoader<NT>
    }

    filterById(id: string) {
        this.keys = this.keys.filter(key => {
            return this.store.mocks[key][0]?.id === id
        })
        return this
    }

    forHydrationLevel(level: number) {
        this.hydrationLevel = level
        return this
    }

    buildTests(builder: Builder<T>) {
        type R = Entities.Select<T>
        return this.keys.reduce((tests, key) => {
            const { id, returns, locale } = decomposeFileKey(key)
            const data = JSON.parse(this.store.cache[key].trim()) as
                BDOCodex.Queries.Response.Wrapper<any>
            const stopAt = this.hydrationLevel || data.aaData.length
            return tests.concat(data.aaData.slice(0, stopAt).map((data, index) => [
                TestLoader.buildTestId({ type: returns, id, index }),
                this.store.mocks[key][index] as R,
                builder.build(data, { locale }) as R,
            ]))
        }, [] as [string, R, R][])
    }

    static buildTestId({ type, id, index }: { type: QueryableEntity, id: string, index: number }) {
        return buildCodexURL({ type, id }) + ` [${index}] (ID: ${id})`
    }
}