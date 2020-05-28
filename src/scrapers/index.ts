import { Scraper } from "./scraper";
import { Categories } from "../enums";
import { EquipmentScraper } from "./equipment.scraper";

const mapCategoryToScraper = (category: Categories): typeof Scraper => {
    switch (category) {
        case Categories.EQUIPMENT:
            return EquipmentScraper;
        case Categories.UNDEFINED:
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