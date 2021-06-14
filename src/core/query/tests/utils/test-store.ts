import { Entities, Selectors } from '@core/query/typings'
import { BDOCodex } from '@typings/namespaces'

export class TestStore<A extends Entities.As> {
    private readonly store: {
        readonly keys: string[]
        readonly cache: Record<string, string>
        readonly mocks: Record<string, Selectors.Entity<A>[]>
    } = (global as any).stores.query

    getKeys(): string[] {
        return this.store.keys
    }

    getMocksForFile(fileKey: string): Selectors.Entity<A>[] {
        if (fileKey in this.store.mocks)
            return this.store.mocks[fileKey]
        throw new Error(`Missing mock for file ${fileKey}.`)
    }

    getResponseForFile(fileKey: string) {
        if (fileKey in this.store.cache) {
            const response = JSON.parse(this.store.cache[fileKey].trim()) as
                BDOCodex.Query.Response<any>
            return response.aaData
        }
        throw new Error(
            `Missing cache for file ${fileKey}. ` +
            'This might be due to the tests not being downloaded beforehand. ' +
            'Try running the test command one more time.'
        )
    }
}