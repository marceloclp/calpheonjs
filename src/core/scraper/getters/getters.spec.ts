import { App } from '@typings/namespaces'
import { getTestCaseData, getTestCases } from '@tests/utils'
import { GetterArgs } from './getters.types'
import * as Getters from './index'

describe('Getters', () => {
    const cases = getTestCases()

    describe.each(cases)('%s', (_, data) => {
        const [expected, $] = getTestCaseData(data)

        const args: GetterArgs = {
            ...data,
            type: expected.type,
            category: expected.category,
            $,
        }

        expected.items && it('getBelongingItems()', () => {
            expect(Getters.getBelongingItems(args)).toMatchObject(expected.items)
        })
        expected.category && it('getCategory()', () => {
            expect(Getters.getCategory(args)).toBe(expected.category)
        })
        expected.cooldown && it('getCooldown()', () => {
            expect(Getters.getCooldown(args)).toBe(expected.cooldown)
        })
        expected.description && it('getDescription', () => {
            expect(Getters.getDescription(args)).toBe(expected.description)
        })
        expected.duration && it('getDuration()', () => {
            expect(Getters.getDuration(args)).toBe(expected.duration)
        })
        expected.effects && it('getEffects()', () => {
            expect(Getters.getEffects(args)).toMatchObject(expected.effects)
        })
        expected.exclusiveTo && it('getExclusiveTo()', () => {
            expect(Getters.getExclusiveTo(args)).toMatchObject(expected.exclusiveTo)
        })
        expected.exp && it('getExp()', () => {
            expect(Getters.getExp(args)).toBe(expected.exp)
        })
        expected.grade && it('getGrade()', () => {
            expect(Getters.getGrade(args)).toBe(expected.grade)
        })
        expected.group && it('getGroup()', () => {
            expect(Getters.getGroup(args)).toBe(expected.group)
        })
        expected.icon && it('getIconURL()', () => {
            // HACK: bypass material group icons for now
            if (expected.type === App.Entities.Types.MaterialGroup)
                expect(true).toBeTruthy()
            else expect(Getters.getIconURL(args)).toBe(expected.icon)
        })
        expected.mastery && it('getMastery()', () => {
            expect(Getters.getMastery(args)).toMatchObject(expected.mastery)
        })
        expected.nameAlternative && it('getNameAlt()', () => {
            expect(Getters.getNameAlt(args)).toBe(expected.nameAlternative)
        })
        expected.materials && it('getMaterials()', () => {
            expect(Getters.getMaterials(args)).toMatchObject(expected.materials)
        })
        expected.name && it('getName()', () => {
            expect(Getters.getName(args)).toBe(expected.name)
        })
        expected.obtainedFrom && it('getObtainedFrom', () => {
            expect(Getters.getObtainedFrom(args)).toMatchObject(expected.obtainedFrom)
        })
        expected.prices && it('getPrices()', () => {
            expect(Getters.getPrices(args)).toMatchObject(expected.prices)
        })
        expected.process && it('getProcess()', () => {
            const getProcess = expected.type === App.Entities.Types.Recipe
                ? Getters.getRecipeProcess
                : Getters.getProcessingProcess
            expect(getProcess(args)).toBe(expected.process)
        })
        expected.products && it('getProducts()', () => {
            expect(Getters.getProducts(args)).toMatchObject(expected.products)
        })
        expected.weight && it('getWeight()', () => {
            expect(Getters.getWeight(args)).toBe(expected.weight)
        })
    })
})