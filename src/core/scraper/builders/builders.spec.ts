import { App } from '@typings/namespaces'
import { getTestCases } from '@tests/utils'
import { TestData } from '@tests/types'
import { Build } from './index'

const cases = Object.entries(getTestCases().reduce((obj, testData) => {
    const type = testData[1].type
    if (!(type in obj))
        obj[type] = []
    obj[type].push(testData)
    return obj
}, {} as Record<App.Entities.Types, TestData<any, any>[]>))

describe('Builders', () => {
    describe.each(cases)('%s', (_, tests) => {
        it.each(tests)('%s', (_, expected, args) => {
            const received = Build(args.type)(args)
            const hasAllKeys = Object.keys(expected).every(key => (
                key in received &&
                typeof expected[key] === typeof received[key]
            ))
            expect(hasAllKeys).toBeTruthy()
        })
    })
})