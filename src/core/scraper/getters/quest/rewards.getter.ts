import { BDO } from '@typings/namespaces'
import { Matcher } from '@helpers/matcher'
import { ShortURL } from '@helpers/utils/short-url'
import { cleanStr } from '@helpers/utils/clean-str'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getRewards: Getter<'rewards'> = ({ $ }) => {
    const matchers = {
        standard: Matcher('Standard'),
        choseOneOf: Matcher('Choose'),
    }
    const rewards: BDO.Quests.Rewards = {
        standard: [],
        choseOneOf: [],
    }

    // First step is finding the actual table row that contains
    // the rewards. This is a hard step because the match terms
    // are too general, which may conflict with normal text.
    // Although the rewards are usually at the bottom, there may
    // be text below the rewards. Currently we take the risk that
    // the match may find normal text instead of the rewards.
    // TODO: find a better way of scraping the rewards.
    const row = $('.outer.item_info td')
        .toArray().reverse().find(elem => {
            return Object.values(matchers).some(matcher => {
                return matcher.findIn($(elem).text())
            })
        })
    if (!row) return rewards
    
    let currKey = 'standard' as keyof typeof matchers
    const elements = $(row).contents().toArray()
    for (let i = 0; i < elements.length; i++) {
        const elem = elements[i]
        if (elem.type === 'text') {
            const newKey = Object.keys(matchers).find(key => {
                return !!matchers[key].findIn($(elem).text())
            }) as keyof typeof matchers
            if (newKey) currKey = newKey
            continue
        }
        if (elem.type !== 'tag' || elem.tagName !== 'div')
            continue
        const img = $(elem).find('img')
        if (!img) continue

        const icon = img.attr('src') as string

        if (img.attr('alt') === 'exp') {
            const text = $(elements[i+1]).text()
            rewards[currKey].push({
                type: 'exp',
                icon: icon as string,
                name: cleanStr(text.substring(0, text.lastIndexOf('('))),
                amount: parseNumber(text),
            })
        } else if (img.attr('alt') === 'icon') {
            const node = $(elem)
            const url = node.find('a').attr('href') as string
            const name = cleanStr($(elements[i+2]).text())
            const { type, id } = ShortURL.decompose(url)

            if (type === BDO.Entities.Types.Knowledge) {
                rewards.knowledge = { type, id, name, icon }
            } else if (type === BDO.Entities.Types.Item) {
                const text = node.find('.quantity_small').text()
                const amount = parseNumber(text, 1)
                rewards[currKey].push({ type, id, name, icon, amount })
            } else if (type === BDO.Entities.Types.NPC) {
                const text = $(elements[i-1]).text()
                const amityGained = parseNumber(text)
                rewards[currKey].push({ type, id, name, icon, amityGained })
            }
        }
    }
 
    return rewards
}
