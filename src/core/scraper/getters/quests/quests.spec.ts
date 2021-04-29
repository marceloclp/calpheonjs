import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../index'

const cases = getTestCases('scraper', App.Entities.Types.Quest)

describe('Quest Getters', () => {
    describe.each(cases)('%s', (_, expected, args) => {
        it('getIconURL()', () => {
            expect(Getters.getIconURL(args))
                .toBe(expected.icon)
        })
        it('getName()', () => {
            expect(Getters.getName(args))
                .toBe(expected.name)
        })
        it('getNameAlt()', () => {
            expect(Getters.getNameAlt(args))
                .toBe(expected.nameAlternative)
        })
        it('getRegion()', () => {
            expect(Getters.Quests.getRegion(args))
                .toBe(expected.region)
        })
        it('getGroup', () => {
            expect(Getters.Quests.getGroup(args))
                .toBe(expected.group)
        })
        it('getLevel()', () => {
            expect(Getters.getLevel(args))
                .toBe(expected.level)
        })
        it('getChain()', () => {
            expectObject(Getters.Quests.getChain(args))
                .toMatch(expected.chain)
        })
        it('getStartNPC()', () => {
            expectObject(Getters.Quests.getStartNPC(args))
                .toMatch(expected.startNPC)
        })
        it('getEndNPC()', () => {
            expectObject(Getters.Quests.getEndNPC(args))
                .toMatch(expected.endNPC)
        })
        it('getStory()', () => {
            expect(Getters.Quests.getStory(args))
                .toBe(expected.story)
        })
        it('getRewards()', () => {
            expectObject(Getters.Quests.getRewards(args))
                .toMatch(expected.rewards)
        })
    })
})