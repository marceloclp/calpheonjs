import { BDO } from '@typings/namespaces'
import { Getter } from '@core/scraper/typings'
import { Chars } from '@typings/utilities'
import { Matcher } from '@helpers/matcher'
import { cleanStr } from '@helpers/utils/clean-str'
import { decodeHTMLEntities } from '@helpers/utils/decode-html-entities'

export const getDescription: Getter<
    string | undefined
> = ({ $, type }) => {
    if (
        type === BDO.Entities.Types.Knowledge ||
        type === BDO.Entities.Types.NPC
    ) {
        const matcher = Matcher('Description:')
        const element = $('.outer.item_info td').toArray().find(elem => {
            const text = $(elem).text()
            return !!matcher.findIn(text)
        })
        if (!element || !matcher.lastMatch)
            return
        const elements = $(element).contents().toArray()
        const startIdx = elements.findIndex(elem => {
            const text = $(elem).text()
            return !!matcher.findIn(text)
        }) + 1
        let description = ''
        for (let i = startIdx; i < elements.length; i++) {
            const elem = elements[i]
            if (elem.type === 'tag' && elem.tagName === 'hr') {
                break
            } else if (elem.type === 'tag' && elem.tagName === 'br') {
                description += Chars.LineBreak
                continue
            }
            description += cleanStr($(elem).text()).trim()
        }
        return cleanStr(description)
    }
    const text = $('meta[name="description"]').attr('content')
    if (typeof text === 'undefined' || !text.length)
        return
    for (let length = 0; length < text.length; length++) {
        const char = text[length], nextChar = text[length+1]
        if (typeof nextChar === 'undefined')
            break
        if (char !== Chars.Dot)
            continue
        if (nextChar === Chars.LineBreak || nextChar === Chars.Space)
            continue
        return decodeHTMLEntities(text.substr(0, length + 1))
    }
    return decodeHTMLEntities(text)
}