import * as Refs from "./refs";
import * as Workers from "../interfaces/npcs/workers";
import { Generic } from "./generic.entity";

export interface Worker extends Generic {
    sellable: boolean;

    max_base_stats: Workers.Stats;

    levels: Workers.Level[];

    growth: Workers.Growth;

    obtained_from: Refs.NPC;
}