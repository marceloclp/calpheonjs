import { Getter } from './getter.type'

export const getId: Getter<'id'> = (data) => {
    return data[0].display
}