import { App } from "../../../typings";
import * as Scrapers from "../typings";
import * as ScraperClasses from "../scrapers";

export const mapCategoryToScraper = (
    category: App.Categories,
    type: Scrapers.EntityTypes,
): typeof ScraperClasses.Scraper => {
    if (type === Scrapers.EntityTypes.ITEM) {
        switch (category) {
            case App.Categories.EQUIPMENT:
                return ScraperClasses.Equipment;
            default:
                return ScraperClasses.Item;
        }
    }
    return ScraperClasses.Scraper;
};