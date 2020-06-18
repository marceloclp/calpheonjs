import { ScrapeFn } from "../../types";

export interface Generic {
    id: string;

    icon: string;

    name: string;

    shortUrl?: string;

    scrape?: ScrapeFn;
}