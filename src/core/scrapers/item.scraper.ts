import { Scraper } from "./scraper";

export class ItemScraper extends Scraper {
    private isQueryAvailable(): boolean {
        return true;
    }
}