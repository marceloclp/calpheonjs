import { ScrapeFn } from "../../types";

export interface Material {
    id: string;

    icon: string;

    name: string;

    grade: number;

    amount: number;

    shortUrl: string;

    scrape?: ScrapeFn;
}