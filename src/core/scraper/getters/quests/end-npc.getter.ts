import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Matcher } from '@helpers/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'

export const getEndNPC: Getter<
    BDO.Refs.NPC | undefined
> = ({ $ }) => {
    const matcher = Matcher('End NPC:')
    const elements = $('.outer.item_info td').contents().toArray()

    let idx = elements.findIndex(elem => {
        return !!matcher.findIn($(elem).text())
    })
    if (!matcher.lastMatch)
        return
    if (elements[idx+2].type === 'tag')
        if ((elements[idx+2] as cheerio.TagElement).tagName === 'b')
            return
    while (idx < elements.length) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'a')
            break
        idx++
    }

    const first = $(elements[idx]), second = $(elements[idx+2])
    const url = first.attr('href') as string
    return {
        type: BDO.Entities.Types.NPC,
        id: decomposeShortURL(url).id,
        name: cleanStr(second.text()),
        icon: first.find('img').attr('src') as string,
    }
}
