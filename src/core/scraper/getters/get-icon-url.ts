import { App } from '@typings/namespaces'
import { Getter } from './getters.types'

export const getIconURL: Getter<string> = ({ $, type }) => {
    if (type === App.Entities.Types.Quest)
        return $('.quest_icon').attr('src') as string
    return $('.item_icon').attr('src') as string
}
