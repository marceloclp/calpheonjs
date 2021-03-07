import { Getter } from './getters.types'

export const getNameAlt: Getter<string | undefined> = ({ $ }) => {
    return $('.item_sub_title').text() || undefined
}
