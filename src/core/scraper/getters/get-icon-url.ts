import { Getter } from './getters.types'

export const getIconURL: Getter<string> = ({ $ }) => {
    return $('.item_icon').attr('src') as string
}
