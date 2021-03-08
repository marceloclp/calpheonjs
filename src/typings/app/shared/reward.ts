import { App } from '@typings/namespaces'

/**
 * A reward is given upon a quest completion.
 */
export type Reward =
    | App.Shared.EXP<{ amount: number }>
    | App.Refs.Item<{ amount: number }>
    | App.Refs.NPC<{ amityGained: number }>
    | App.Refs.Knowledge
