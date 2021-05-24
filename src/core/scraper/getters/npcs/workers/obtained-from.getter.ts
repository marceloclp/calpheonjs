import { Matcher } from '@helpers/matcher'
import { Entities, Getter } from '@core/scraper/typings'
import { cleanStr } from '@helpers/utils/clean-str'
import { decomposeShortURL } from '@helpers/utils/short-url'

export const getObtainedFrom: Getter<
    Entities.NPCs.Worker['obtainedFrom']
> = ({ $ }) => {
    const matcher = Matcher('Obtained from')
    const elements = $('.outer.item_info td').contents().toArray()

    let idx = elements.findIndex(elem => {
        const text = $(elem).text()
        return !!matcher.findIn(text)
    })
    if (idx === -1) return

    for (idx = idx + 1; idx < elements.length; idx++) {
        const elem = elements[idx]
        if (elem.type === 'tag' && elem.tagName === 'a')
            break
    }

    const anchor = $(elements[idx])
    const img = anchor.parent().find('img')
    const { type, id } = decomposeShortURL(anchor.attr('href') as string)

    return {
        id,
        type,
        name: cleanStr(anchor.text()),
        icon: img.attr('src') as string,
    } as Entities.NPCs.Worker['obtainedFrom']
}
