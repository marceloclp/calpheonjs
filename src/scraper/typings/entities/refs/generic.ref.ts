import { ScrapeFn } from "../../types";

export interface Generic {
    type?: string;

    id: string;

    icon: string;

    name: string;

    shortUrl?: string;

    scrape?: ScrapeFn;
}