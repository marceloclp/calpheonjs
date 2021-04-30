import cheerio from 'cheerio'
import { App, BDOCodex } from '@typings/namespaces'
import { Matcher } from '@helpers/factory/matcher'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'
import { substrOf } from '@helpers/utils/substr-of'
import { Getter } from '../getter.types'

// FIXME: it's not returning the correct amount
export const getRewards: Getter<
    BDOCodex.Queries.Response.Quest,
    App.Shared.Quests.Rewards
> = (data) => {
    const matchers = {
        standard: Matcher('Standard'),
        choseOneOf: Matcher('Choose'),
    }
    const rewards: App.Shared.Quests.Rewards = {
        standard: [],
        choseOneOf: [],
    }

    ;([
        [data[5].display, 'EXP'],
        [data[6].display, ' Skill EXP'],
        [data[7], 'Contribution EXP'],
    ]).forEach(([value, name]) => {
        const amount = parseNumber(value)
        if (amount === 0) return
        rewards.standard.push({ type: 'exp', name, amount })
    })

    let activeKey = 'standard' as keyof typeof matchers
    const $ = cheerio.load('<div>' + data[8] + '</div>')
    $('div').contents().toArray().forEach(elem => {
        const node = $(elem)
        const text = node.text()
        if (elem.type === 'tag' && elem.tagName === 'div') {
            const url = node.find('a').attr('href') as string
            const { type, id } = decomposeShortURL(url)
            if (type === App.Entities.Types.Item) {
                const amount = parseNumber(
                    node.find('.quantity_small').text()
                )
                const icon = substrOf(
                    node.find('.icon_wrapper').text(),
                    { left: 'src="', right: '"' },
                )
                rewards[activeKey].push({ type, id, icon, amount })
            }
            return
        }
        const key = Object.keys(matchers).find(key => {
            return !matchers[key].lastMatch && matchers[key].findIn(text)
        }) as keyof typeof matchers
        if (key) activeKey = key
    })

    return rewards
}