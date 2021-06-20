import { Entities, Selectors } from '@core/query/typings'
import { BDOCodex } from '@typings/namespaces'

export class TestStore<A extends Entities.As> {
    private readonly store: {
        readonly keys: string[]
        readonly cache: Record<string, string>
        readonly mocks: Record<string, Selectors.Entity<A>[]>
    } = (global as any).stores.query

    getKeys(): string[] {
        return [...this.store.keys]
    }

    getMocksForFile(fileKey: string): Selectors.Entity<A>[] {
        if (fileKey in this.store.mocks)
            return this.store.mocks[fileKey]
        throw new Error(`Missing mock for file ${fileKey}.`)
    }

    getResponseForFile(fileKey: string) {
        if (fileKey in this.store.cache) {
            const response: BDOCodex.Query.Response<any> = JSON
                .parse(this.store.cache[fileKey].trim())
            return response.aaData
        }
        throw new Error(
            `Missing cache for file ${fileKey}. ` +
            `Try running 'npm run pretest' before running the tests again. ` +
            `If this doesn't help, please open an issue on GitHub.`
        )
    }
}