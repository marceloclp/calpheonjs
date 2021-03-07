import { Result } from "./interfaces";

export type EntityTypes = (
    | 'unknown'
    | 'recipe'
    | 'npc_drop'
    | 'node'
    | 'item'
    | 'npc'
    | 'quest'
    | 'exp'
);

export type QueryFn<T = any> = <T>() => Promise<Result<T>>;