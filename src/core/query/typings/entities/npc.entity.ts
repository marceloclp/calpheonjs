import { Generic } from "./generic.entity";

export interface NPC extends Generic {
    type: 'npc';

    /** The level of the NPC. */
    lvl: number;

    /** How much health points the NPC has. */
    hp: number;

    /** How much defense the NPC has. */
    defense: number;

    /** How much evasion the NPC has. */
    evasion: number;

    /** How much exp the NPC gives. */
    exp: number;

    /** How much skill exp the NPC gives. */
    exp_skill: number;

    /** How much karma the NPC has. */
    karma: number;
}