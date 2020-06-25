import * as Entities from "../entities";
import { ScrapeFn } from "../types";

export interface Item {
    type: 'item';

    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape: ScrapeFn<Entities.Item>;
}