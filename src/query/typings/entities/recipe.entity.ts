import { Ref } from "./ref.entity";
import { Generic } from "./generic.entity";

export interface Recipe extends Generic {
    type: 'recipe';

    /** The process used to craft the recipe (e.g, "Simple Cooking"). */
    process: string;

    /** The exp received on successful craft. */
    exp: number;

    /** The required skill level to craft the recipe. */
    skill_lvl: {
        /** The mastery name (e.g, Beginner). */
        mastery: string;

        /** The mastery level. */
        lvl: number;
    };

    /** A list of items required to craft the recipe. */
    materials: (Ref & { amount: number })[];

    /** A list of possible items acquired from a successful craft. */
    products: (Ref & { amount: number })[];
}