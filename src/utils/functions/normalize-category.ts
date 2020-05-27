import { Locales, Categories } from "../../enums";

export const normalizeCategory = (category: string, locale: Locales): Categories => {
    const value = category
        .toLowerCase()
        .split(' ')
        .join('_');
        
    switch (locale) {
        
        case Locales.US:
            switch (value) {
                case 'equipment':
                    return Categories.EQUIPMENT;
                case 'crafting_materials':
                    return Categories.CRAFTING_MATERIAL;
                case 'consumable':
                    return Categories.CONSUMABLE;
                case 'installable_object':
                    return Categories.INSTALLABLE_OBJECT;
                default:
                    return Categories.UNDEFINED;
            }

        default:
            return Categories.UNDEFINED;
    }
}