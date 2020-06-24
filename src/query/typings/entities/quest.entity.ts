import * as Quests from "../interfaces/quests";
import { Scrapers } from "../../../scraper";
import { Generic } from "./generic.entity";

export interface Quest extends Generic {
    type: 'quest';

    /** The level required to unlock  */
    lvl: number;

    /** The region where the player can get the quest. */
    region: string;

    /** The exp given by completing the quest. */
    exp: number;

    /** The skill exp given by completing the quest. */
    exp_skill: number;
    
    /** The contribution exp given by completing the quest. */
    exp_contribution: number;

    /** The rewards received by completing the quest. */
    rewards: Quests.Rewards;

    scrape: Scrapers.ScrapeFn<Scrapers.Entities.Quest>;
}