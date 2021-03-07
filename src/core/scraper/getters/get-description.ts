import { Chars } from '@typings/utilities'
import { decodeHTMLEntities } from '@helpers/utils/decode-html-entities'
import { Getter } from './getters.types'

export const getDescription: Getter<string | undefined> = ({ $, locale }) => {
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
    // Try the easy way first.
    // const pageInfoString = $('script[type="application/ld+json"]').first().html()
    // const pageInfoString = $('meta[name="description"]').attr('content')
    // console.log(pageInfoString)
    // if (pageInfoString) {
    //     // console.log('got here')
    //     // const pageInfo = JSON.parse(pageInfoString) as BDOCodex.HTML.PageInfo
    //     // // TODO: need to process this string
    //     // console.log(cleanStr(pageInfo.description).trim())
    //     return 'asdas'
    //     // return cleanStr(pageInfo.description).trim()
    // }
    // const matcher = LocaleMatcher(DescriptionDict, locale)
    // const rowElements = $('.outer.item_info td').toArray()

    // const element = rowElements.find(element => {
    //     const textContent = $(element).text()
    //     return !!matcher.findIn(textContent)
    // })
    // if (!element || !matcher.lastMatch) return

    // const { found, index } = matcher.lastMatch

    // const startIndex = index + found.length
    // let endIndex: number
    
    // let breakCount = 0
    // const textContent = $(element).text()
    // for (endIndex = startIndex; endIndex < textContent.length; endIndex++) {
    //     const char = textContent[endIndex]
    //     if (char === Chars.Dash || char === Chars.Hyphen)
    //         break
    //     else if (char === Chars.LineBreak)
    //         breakCount++
    //     if (breakCount >= 2) break
    // }
    // return textContent.substring(startIndex, endIndex)
}
