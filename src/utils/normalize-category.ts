import { App } from "../typings";

export const normalizeCategory = (
    category: string,
    locale: App.Locales
): App.Categories => {
    const value = category
        .toLowerCase()
        .split(' ')
        .join('_');
        
    switch (locale) {
        case App.Locales.US:
            switch (value) {
                case 'equipment':
                    return App.Categories.EQUIPMENT;
                case 'crafting_materials':
                    return App.Categories.CRAFTING_MATERIAL;
                case 'consumable':
                    return App.Categories.CONSUMABLE;
                case 'installable_object':
                    return App.Categories.INSTALLABLE_OBJECT;
                default:
                    return App.Categories.UNDEFINED;
            }

        default:
            return App.Categories.UNDEFINED;
    }
}