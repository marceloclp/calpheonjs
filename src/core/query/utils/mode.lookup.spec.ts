import { BDOCodex } from '@typings/namespaces'
import { Modes } from '../typings'
import { ModeLookup } from './mode.lookup'

describe('ModeLookup', () => {
    describe('when converting from codex descriptor to query type', () => {
        it('should return the corresponding query type', () => {
            expect(ModeLookup.toQueryType({
                a: BDOCodex.Query.As.Quest,
                type: BDOCodex.Query.Types.QuestReward,
            })).toBe(Modes.QuestReward)
        })
        it('should throw an error if the descriptor is not valid', () => {
            expect(() => ModeLookup.toQueryType({
                a: 'invalid_as' as BDOCodex.Query.As,
                type: 'invalid_type' as BDOCodex.Query.Types,
            })).toThrow();
        })
    })
    describe('when converting from query type to codex descriptor', () => {
        it('should return the corresponding codex descriptor', () => {
            expect(
                ModeLookup.toCodexDescriptor(Modes.QuestReward)
            ).toMatchObject({
                a: BDOCodex.Query.As.Quest,
                type: BDOCodex.Query.Types.QuestReward,
            })
        })
        it('should throw an error if the query type can not be mapped', () => {
            expect(
               () => ModeLookup.toCodexDescriptor('invalid_query_type' as Modes)
            ).toThrow()
        })
    })
})