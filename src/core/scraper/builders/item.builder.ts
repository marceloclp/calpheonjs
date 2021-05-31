import { BDO } from '@typings/namespaces'
import * as Getters from '@core/scraper/getters'
import { Generic } from './generic.builder'

export const Item = Generic
    .forType(args => ({
        type: BDO.Entities.Types.Item,
        subType: Getters.Items.getSubType(args),
        grade: Getters.getGrade(args),
        prices: Getters.Items.getPrices(args),
        weight: Getters.Items.getWeight(args),
    }))
    .forSubType(BDO.Items.SubTypes.Consumable, args => ({
        effects: Getters.Items.Consumables.getEffects(args),
        duration: Getters.Items.Consumables.getDuration(args),
        cooldown: Getters.Items.Consumables.getCooldown(args),
    }))
    .forSubType(BDO.Items.SubTypes.Equipment, args => ({
        enhancements: Getters.Items.Equipments.getEnhancements(args),
        caphras: Getters.Items.Equipments.getCaphras(args),
        exclusiveTo: Getters.Items.Equipments.getExclusiveTo(args),
        fairyExp: Getters.Items.Equipments.getFairyExp(args),
    }))