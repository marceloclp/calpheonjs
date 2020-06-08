import { Generic } from "./generic.entity";

export interface NPC extends Generic {
    /** The level of the NPC. */
    readonly lvl: number;

    /** How much health points the NPC has. */
    readonly hp: number;

    /** How much defense the NPC has. */
    readonly defense: number;

    /** How much evasion the NPC has. */
    readonly evasion: number;

    /** How much exp the NPC gives. */
    readonly exp: number;

    /** How much skill exp the NPC gives. */
    readonly exp_skill: number;

    /** How much karma the NPC has. */
    readonly karma: number;
}