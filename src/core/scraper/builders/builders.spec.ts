import { App } from '@typings/namespaces'
import { getTestCaseData, getTestCases } from '@tests/utils'
import * as Builders from './index'

describe('Builders', () => {
    const cases = getTestCases()

    describe.each(cases)('%s', (_, data) => {
        const [expected, $] = getTestCaseData(data)

        const received = {
            [App.Entities.Types.Item]: Builders.buildItem,
            [App.Entities.Types.Recipe]: Builders.buildRecipe,
            [App.Entities.Types.Processing]: Builders.buildProcessing,
            [App.Entities.Types.Knowledge]: Builders.buildKnowledge,
            [App.Entities.Types.MaterialGroup]: Builders.buildMaterialGroup,
            [App.Entities.Types.NPC]: Builders.buildNPC,
            [App.Entities.Types.Quest]: Builders.buildQuest,
        }[expected.type]?.({ ...data, $, type: expected.type })

        it('should have all expected keys', () => {
            const hasAllKeys = Object.keys(expected).every(
                key => key in received
            )
            expect(hasAllKeys).toBeTruthy()
        })
    })
})
