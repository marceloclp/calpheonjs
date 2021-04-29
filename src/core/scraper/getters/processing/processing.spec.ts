import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../index'

const cases = getTestCases('scraper', App.Entities.Types.Processing)

describe('Processing Getters', () => {
    describe.each(cases)('%s', (_, expected, args) => {
        it('getIconURL()', () => {
            expect(Getters.getIconURL(args))
                .toBe(expected.icon)
        })
        it('getName()', () => {
            expect(Getters.getName(args))
                .toBe(expected.name)
        })
        it('getExp()', () => {
            expect(Getters.getExp(args))
                .toBe(expected.exp)
        })
        it('getMastery()', () => {
            expectObject(Getters.getMastery(args))
                .toMatch(expected.mastery)
        })
        it('getMaterials()', () => {
            expectObject(Getters.Processing.getMaterials(args))
                .toMatch(expected.materials)
        })
        it('getProcess', () => {
            expect(Getters.Processing.getProcess(args))
                .toBe(expected.process)
        })
        it('getProducts()', () => {
            expectObject(Getters.Processing.getProducts(args))
                .toMatch(expected.products)
        })
    })
})