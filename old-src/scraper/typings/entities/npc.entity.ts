import * as NPCs from "../interfaces/npcs";
import { Generic } from "./generic.entity";

export interface NPC extends Generic {
    /** Available if it's a killable monster. */
    mob_type?: NPCs.Type;
    
    /** The level of the NPC. */
    lvl?: number;

    /** The amount of HP the NPC has. */
    hp?: number;

    /** The amount of defense the NPC has. */
    defense?: number;

    /** The amount of evasion the NPC has. */
    evasion?: number;

    /** The amount of damage reduction the NPC has. */
    dmg_reduction?: number;

    /** The exp points given by the NPC when killed. */
    exp?: number;

    /** The skill exp points given by the NPC when killed. */
    exp_skill?: number;

    /** The karma given by the NPC when killed. */
    karma?: number;

    /** A NPC may give a knowledge when interacted with. */
    knowledge?: NPCs.Knowledge;
}