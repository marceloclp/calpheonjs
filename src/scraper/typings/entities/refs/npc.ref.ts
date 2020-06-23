import * as Entities from "../../entities";
import { ScrapeFn } from "../../types";

export interface NPC {
    type: 'npc';

    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape: ScrapeFn<Entities.NPC>;
}