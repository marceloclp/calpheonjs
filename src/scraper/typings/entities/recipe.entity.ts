import { Generic } from "./generic.entity";
import { Recipes } from "../interfaces";

export interface Recipe extends Generic {
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
    materials: Recipes.Material[];

    /** A list of possible items acquired from a successful craft. */
    products: Recipes.Material[];
}