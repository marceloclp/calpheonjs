export type TestableModule =
    | 'scraper'
    | 'query'

export type Row<Expected, Args> = [
    string, // test name
    Expected,
    Args,
]

export interface TestStore {
    readonly keys: string[]
    readonly mocks: Record<string, any>
    readonly cache: Record<string, string>
}