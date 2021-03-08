import { Chars } from '@typings/utilities'
import { decodeHTMLEntities } from '@helpers/utils/decode-html-entities'
import { Getter } from './getters.types'

export const getDescription: Getter<string | undefined> = ({ $ }) => {
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
