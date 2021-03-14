import { App } from '@typings/namespaces'
import { getTestCases, expectObject } from '@tests/utils'
import * as Getters from '../../index'

const cases = getTestCases<
    App.Entities.Types.NPC,
    App.Entities.NPCs.Worker
>(App.Entities.Types.NPC, App.Entities.NPCs.Categories.Worker)

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
        it('getSellable()', () => {
            expect(Getters.NPCs.Workers.getSellable(args))
                .toBe(expected.sellable)
        })
        it('getStamina()', () => {
            expect(Getters.NPCs.Workers.getStamina(args))
                .toBe(expected.stamina)
        })
        it('getLevels()', () => {
            expectObject(Getters.NPCs.Workers.getLevels(args))
                .toMatch(expected.levels)
        })
        it('getGrowth()', () => {
            expectObject(Getters.NPCs.Workers.getGrowth(args))
                .toMatch(expected.statsGrowth)
        })
        it('getSkillsChance()', () => {
            expectObject(Getters.NPCs.Workers.getSkillsChance(args))
                .toMatch(expected.acquireChanceTable)
        })
        it('getPersonalSkill()', () => {
            expectObject(Getters.NPCs.Workers.getPersonalSkill(args))
                .toMatch(expected.personalSkill)
        })
    })
})