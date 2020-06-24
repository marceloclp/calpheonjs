import * as Recipes from "../interfaces/recipes";
import { Scrapers } from "../../../scraper";
import { Generic } from "./generic.entity";

export interface Recipe extends Generic {
    type: 'recipe';

    /** The process used to craft the recipe (e.g, "Simple Cooking"). */
    process?: string;

    /** The exp received on successful craft. */
    exp: number;

    /** The required skill level to craft the recipe. */
    skill_lvl: Recipes.SkillLvl;

    /** A list of items required to craft the recipe. */
    materials: Recipes.Material[];

    /** A list of possible items acquired from a successful craft. */
    products: Recipes.Material[];

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.Recipe>;
}