import { Result } from "../../interfaces";
import { Item } from "../item.entity";

export interface Material {
    id: string;

    icon: string;

    name: string;

    grade: number;

    amount: number;

    shortUrl: string;

    scrape?: () => Promise<Result<Item>>;
}