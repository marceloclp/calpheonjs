import { TestableModule, TestStore } from '@tests/typings'

export const getStore = (module: TestableModule): TestStore => {
    return (global as any).stores[module]
}
