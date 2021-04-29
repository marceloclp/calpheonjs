import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../index'

const cases = getTestCases('scraper', App.Entities.Types.MaterialGroup)

describe('Recipe Getters', () => {
    describe.each(cases)('%s', (_, expected, args) => {
        it('getName()', () => {
            expect(Getters.getName(args))
                .toBe(expected.name)
        })
        it('getItems()', () => {
            expectObject(Getters.MaterialGroup.getItems(args))
                .toMatch(expected.items)
        })
    })
})