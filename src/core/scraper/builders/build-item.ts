import { App } from '@typings/namespaces'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildItem: Builder<App.Entities.Items.Item> = ({ $, id, type, locale }) => {
    const category = Getters.getCategory({ $, id, type, locale })
    const getterArgs: GetterArgs = { $, id, type, locale, category }

    const item: App.Entities.Items.Item = {
        id,
        category: category as App.Entities.Items.Categories,
        type: App.Entities.Types.Item,
        icon: Getters.getIconURL(getterArgs),
        name: Getters.getName(getterArgs),
        nameAlternative: Getters.getNameAlt(getterArgs),
        description: Getters.getDescription(getterArgs),
        grade: Getters.getGrade(getterArgs),
        prices: Getters.getPrices(getterArgs),
        weight: Getters.getWeight(getterArgs),
    }

    switch (category as App.Entities.Items.Categories) {
        case App.Entities.Items.Categories.Consumable:
            return {
                ...item,
                effects: Getters.getEffects(getterArgs),
                duration: Getters.getDuration(getterArgs),
                cooldown: Getters.getCooldown(getterArgs),
            } as App.Entities.Items.Consumable
        case App.Entities.Items.Categories.Equipment:
            const enhancementStats = Getters.getEnhancementStats(getterArgs)
            return {
                ...item,
                stats: enhancementStats[0].stats,
                effects: enhancementStats[0].effects,
                enhancementStats,
                caphrasStats: Getters.getCaphrasStats(getterArgs),
                exclusiveTo: Getters.getExclusiveTo(getterArgs),
                fairyExp: Getters.getFairyExp(getterArgs),
            } as App.Entities.Items.Equipment
        default:
            return item
    }
}
