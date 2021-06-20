import { Entity } from '@core/search/typings'
import { BDOCodex } from '@typings/namespaces'

export class TestStore {
    private readonly store: {
        readonly keys: string[]
        readonly cache: Record<string, string>
        readonly mocks: Record<string, Entity[]>
    } = (global as any).stores.search

    getKeys(): string[] {
        return [...this.store.keys]
    }

    getMockForFile(fileKey: string) {
        if (fileKey in this.store.mocks)
            return this.store.mocks[fileKey]
        throw new Error(`Missing mock for file ${fileKey}.`)
    }

    getResponseForFile(fileKey: string) {
        if (fileKey in this.store.cache) {
            const response: BDOCodex.Search.Result[] = JSON
                .parse(this.store.cache[fileKey].trim())
            return response
        }
        throw new Error(
            `Missing cache for file ${fileKey}. ` +
            `Try running 'npm run pretest' before running the tests again. ` +
            `If this doesn't help, please open an issue on GitHub.`
        )
    }
}