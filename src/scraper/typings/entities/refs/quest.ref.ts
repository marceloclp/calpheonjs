import { ScrapeFn } from "../../types";
import { Entities } from "../..";

export interface Quest {
    type: 'quest';
    
    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape?: ScrapeFn<Entities.Quest>;
}