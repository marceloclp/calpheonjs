import { Ref } from "./ref.entity";
import { Generic } from "./generic.entity";

export interface Recipe extends Generic {
    /** The process used to craft the recipe (e.g, "Simple Cooking"). */
    readonly process: string;

    /** The exp received on successful craft. */
    readonly exp: number;

    /** The required skill level to craft the recipe. */
    readonly skill_lvl: {
        /** The mastery name (e.g, Beginner). */
        readonly mastery: string;

        /** The mastery level. */
        readonly lvl: number;
    };

    /** A list of items required to craft the recipe. */
    readonly materials: Ref[];

    /** A list of possible items acquired from a successful craft. */
    readonly products: Ref[];
}