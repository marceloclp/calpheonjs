import * as NPCs from "../interfaces/npcs";
import { Generic } from "./generic.entity";

export interface NPC extends Generic {
    mob_type: NPCs.Type;
    
    lvl?: number;

    hp?: number;

    defense?: number;

    evasion?: number;

    dmg_reduction?: number;

    exp?: number;

    exp_skill?: number;

    karma?: number;

    knowledge?: NPCs.Knowledge;
}