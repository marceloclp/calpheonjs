import { ScrapeFn } from "../../types";
import { Entities } from "../..";

export interface Item {
    type: 'item';

    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape?: ScrapeFn<Entities.Item>;
}