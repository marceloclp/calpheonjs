import * as Entities from "../";
import { ScrapeFn } from "../../types";

export interface MaterialGroup {
    type: 'material_group';

    id: string;

    icon: string;

    name: string;

    shortUrl: string;

    scrape: ScrapeFn<Entities.MaterialGroup>;
}