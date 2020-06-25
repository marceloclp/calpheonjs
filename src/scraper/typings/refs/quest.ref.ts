import * as Entities from "../entities";
import { ScrapeFn } from "../types";

export interface Quest {
    type: 'quest';
    
    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape: ScrapeFn<Entities.Quest>;
}