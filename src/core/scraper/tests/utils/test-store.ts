import { Entities, Selectors } from '@core/scraper/typings'

export class TestStore<A extends Entities.As> {
    private readonly store: {
        readonly keys: string[]
        readonly cache: Record<string, string>
        readonly mocks: Record<string, Selectors.Entity<A>>
    } = (global as any).stores.scraper

    getKeys(): string[] {
        return [...this.store.keys]
    }

    getMockForFile(fileKey: string): Selectors.Entity<A> {
        if (fileKey in this.store.mocks)
            return this.store.mocks[fileKey]
        throw new Error(`Missing mock for file ${fileKey}.`)
    }

    getResponseForFile(fileKey: string): string {
        if (fileKey in this.store.cache)
            return this.store.cache[fileKey].trim()
        throw new Error(
            `Missing cache for file ${fileKey}. ` +
            `Try running 'npm run pretest' before running the tests again. ` +
            `If this doesn't help, please open an issue on GitHub.`
        )
    }
}