import { Result } from "./interfaces";

export type EntityTypes = (
    | 'unknown'
    | 'recipe'
    | 'npc_drop'
    | 'node'
    | 'item'
    | 'npc'
    | 'quest'
    | 'ref'
    | 'exp'
);

export type QueryFn<T = any> = <T>() => Promise<Result<T>>;