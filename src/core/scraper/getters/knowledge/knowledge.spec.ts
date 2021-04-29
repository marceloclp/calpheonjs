import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../index'

const cases = getTestCases('scraper', App.Entities.Types.Knowledge)

describe('Recipe Getters', () => {
    describe.each(cases)('%s', (_, expected, args) => {
        it('getIconURL()', () => {
            expect(Getters.getIconURL(args))
                .toBe(expected.icon)
        })
        it('getName()', () => {
            expect(Getters.getName(args))
                .toBe(expected.name)
        })
        it('getGroup()', () => {
            expect(Getters.Knowledge.getGroup(args))
                .toBe(expected.group)
        })
        it('getObtainedFrom()', () => {
            expectObject(Getters.getObtainedFrom(args))
                .toMatch(expected.obtainedFrom)
        })
    })
})