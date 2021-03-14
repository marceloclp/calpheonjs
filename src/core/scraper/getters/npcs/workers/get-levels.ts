import { App, BDO, BDOCodex } from '@typings/namespaces'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from '../../getters.types'

export const getLevels: Getter<
    App.Shared.NPCs.Workers.Level[]
> = ({ $ }) => {
    const html = $('.smallertext')
        .first().find('script').html()
    if (!html) return []
    const startIdx = html.indexOf('[')
    const data = JSON.parse(
        html.substr(startIdx)
    ) as BDOCodex.Workers.Upgrade[]

    return data.map(upgrade => ({
        sellPrice: parseNumber(upgrade.sell_price),
        expToNextLevel: parseNumber(upgrade.nextlvexp),
        upgradeChance: parseNumber(upgrade.upgrade_chance),
        maxStats: {
            [BDO.NPCs.Workers.Attributes.Luck]: parseNumber(upgrade.luck),
            [BDO.NPCs.Workers.Attributes.MovementSpeed]: parseNumber(upgrade.move_speed),
            [BDO.NPCs.Workers.Attributes.WorkSpeed]: parseNumber(upgrade.work_speed),
        },
    }))
}
