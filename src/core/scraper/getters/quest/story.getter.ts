import { Chars } from '@typings/utilities'
import { cleanStr } from '@helpers/utils/clean-str'
import { Getter } from './getter.type'

export const getStory: Getter<'story'> = ({ $ }) => {
    const elements = $('#full_quest_text')
        .contents().toArray()
    if (!elements.length)
        return
    let story = '', brCount = 0
    for (const elem of elements) {
        if (elem.type === 'tag' && elem.tagName === 'br') {
            if (brCount < 2) story += Chars.LineBreak
            brCount++
            continue
        }
        const node = $(elem)
        if (elem.type === 'tag' && elem.tagName === 'span') {
            if (node.attr('style') === 'color: #f32200')
                continue
            else story += Chars.Space
        }
        brCount = 0
        story += cleanStr(node.text())
    }
    return cleanStr(story)
}
