import { Generic } from "./generic.entity";
import { Refs } from "../../../scraper/typings/entities";

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
    materials: Refs.Material[];

    /** A list of possible items acquired from a successful craft. */
    products: Refs.Material[];
}