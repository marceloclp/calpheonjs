import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../../index'

const cases = getTestCases(
    'scraper',
    App.Entities.Types.NPC,
    App.Entities.NPCs.Categories.Other
)

describe('Others NPC Getters', () => {
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
            expect(Getters.NPCs.Others.getGroup(args))
                .toBe(expected.group)
        })
        it('getMobType()', () => {
            expect(Getters.NPCs.Others.getMobType(args))
                .toBe(expected.mobType)
        })
        it('getStats()', () => {
            expectObject(Getters.NPCs.Others.getStats(args))
                .toMatch(expected.stats)
        })
    })
})