import { App } from "../../typings/app";
import { Scraper } from "./scraper";
import { EquipmentScraper } from "./equipment.scraper";

const mapCategoryToScraper = (category: App.Categories): typeof Scraper => {
    switch (category) {
        case App.Categories.EQUIPMENT:
            return EquipmentScraper;
        case App.Categories.UNDEFINED:
            return Scraper;
        default:
            return Scraper;
    }
}

export default function ScrapeFactory(
    ...args: ConstructorParameters<typeof Scraper>
): Scraper {
    const { category_id } = new Scraper(...args);
    const scraper = mapCategoryToScraper(category_id);

    return new scraper(...args);
}