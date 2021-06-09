import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'

export const getPersonalSkill: Getter<
    BDO.Refs.WorkerSkill | undefined
> = ({ $ }) => {
    const matcher = Matcher('Personal skill:')
    const elements = $('.outer.item_info td')
        .contents().toArray()
    let idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (idx === -1)
        return
    while (idx < elements.length) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'table')
            break
        idx++
    }
    const anchors = $(elements[idx]).find('a').toArray()
    // First anchor refers to the icon, while second anchor contains
    // the name and effect.
    const first = $(anchors[0]), second = $(anchors[1])
    const url = first.attr('href') as string
    const texts = second.contents().toArray()
        .filter(elem => elem.type === 'text')
    
    return {
        id: decomposeShortURL(url).id,
        type: BDO.Entities.Types.WorkerSkill,
        icon: first.find('img').attr('src') as string,
        name: cleanStr($(texts[0]).text()),
        effect: cleanStr($(texts[1]).text()),
    }
}