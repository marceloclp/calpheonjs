import { BDOCodex } from '@typings/namespaces'
import { QueryTypes } from '../typings'
import { QueryTypeLookup } from './query-type.lookup'

describe('Query Type Lookup', () => {
    describe('when converting from codex descriptor to query type', () => {
        it('should return the corresponding query type', () => {
            expect(QueryTypeLookup.toQueryType({
                a: BDOCodex.Query.As.Quest,
                type: BDOCodex.Query.Types.QuestReward,
            })).toBe(QueryTypes.QuestReward)
        })
        it('should throw an error if the descriptor is not valid', () => {
            expect(() => QueryTypeLookup.toQueryType({
                a: 'invalid_as' as BDOCodex.Query.As,
                type: 'invalid_type' as BDOCodex.Query.Types,
            })).toThrow();
        })
    })
    describe('when converting from query type to codex descriptor', () => {
        it('should return the corresponding codex descriptor', () => {
            expect(
                QueryTypeLookup.toCodexDescriptor(QueryTypes.QuestReward)
            ).toMatchObject({
                a: BDOCodex.Query.As.Quest,
                type: BDOCodex.Query.Types.QuestReward,
            })
        })
        it('should throw an error if the query type can not be mapped', () => {
            expect(
               () => QueryTypeLookup.toCodexDescriptor('invalid_query_type' as QueryTypes)
            ).toThrow()
        })
    })
})