import { App } from "../typings";

const Ctgs = App.Categories;

const mapper = {
    [App.Locales.US]: {
        'equipment':          Ctgs.EQUIPMENT,
        'crafting_materials': Ctgs.CRAFTING_MATERIAL,
        'consumable':         Ctgs.CONSUMABLE,
        'installable_object': Ctgs.INSTALLABLE_OBJECT,
        'special_items':      Ctgs.SPECIAL_ITEM,
        'recipe':             Ctgs.RECIPE,
        'quest':              Ctgs.QUEST,
        'worker':             Ctgs.WORKER,
        'item_group':         Ctgs.MATERIAL_GROUP,
    }
};

export const normalizeCategory = (
    category: string,
    locale: App.Locales
): App.Categories => {
    const ctg_id = category
        .toLowerCase()
        .split(' ')
        .join('_');
    const forLocale = mapper[locale];
    if (!(ctg_id in forLocale))
        return Ctgs.UNDEFINED;
    return (forLocale as any)[ctg_id as any];
}