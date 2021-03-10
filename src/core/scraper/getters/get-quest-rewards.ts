import { App } from '@typings/namespaces'
import { Matcher } from '@helpers/factory/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getters.types'

export const getQuestRewards: Getter<
    App.Shared.Quests.Rewards
> = ({ $ }) => {
    const matchers = {
        standard: Matcher('Standard'),
        choseOneOf: Matcher('Choose'),
    }
    const rewards: App.Shared.Quests.Rewards = {
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
            const { type, id } = decomposeShortURL(url)
            const ref: App.Refs.Ref = { type, id, name, icon}

            if (type === App.Entities.Types.Knowledge) {
                rewards.knowledge = ref
            } else if (type === App.Entities.Types.Item) {
                const text = node.find('.quantity_small').text()
                const amount = parseNumber(text, 1)
                rewards[currKey].push({ ...ref, amount })
            } else if (type === App.Entities.Types.NPC) {
                const text = $(elements[i-1]).text()
                const amityGained = parseNumber(text)
                rewards[currKey].push({ ...ref, amityGained })
            }
        }
    }
 
    return rewards
}
