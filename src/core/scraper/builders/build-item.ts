import { App } from '@typings/namespaces'
import { UnknownFound } from '@core/errors/unknown-found'
import { GetterArgs } from '../getters/getters.types'
import * as Getters from '../getters'
import { Builder } from './builders.types'

export const buildItem: Builder<
    App.Entities.Types.Item
> = ({ $, id, type, locale }) => {
    const category =
        Getters.Items.getCategory({ $, id, type, locale })
    if (!category)
        throw new UnknownFound('category', id, type, locale)
    const args: GetterArgs = { $, id, type, locale, category }

    const entity: App.Entities.Items.Item = {
        id,
        category,
        type: App.Entities.Types.Item,
        icon: Getters.getIconURL(args),
        name: Getters.getName(args),
        nameAlternative: Getters.getNameAlt(args),
        description: Getters.getDescription(args),
        grade: Getters.getGrade(args),
        prices: Getters.Items.getPrices(args),
        weight: Getters.Items.getWeight(args),
    }

    switch (category) {
        case App.Entities.Items.Categories.Consumable:
            return Object.assign(entity, {
                effects:
                    Getters.Items.Consumables.getEffects(args),
                duration:
                    Getters.Items.Consumables.getDuration(args),
                cooldown:
                    Getters.Items.Consumables.getCooldown(args),
            }) as App.Entities.Items.Consumable
        case App.Entities.Items.Categories.Equipment:
            return Object.assign(entity, {
                enhancementStats:
                    Getters.Items.Equipments.getEnhancementStats(args),
                caphrasStats:
                    Getters.Items.Equipments.getCaphrasStats(args),
                exclusiveTo:
                    Getters.Items.Equipments.getExclusiveTo(args),
                fairyExp:
                    Getters.Items.Equipments.getFairyExp(args),
            }) as App.Entities.Items.Equipment
        default: return entity
    }
}