import { Getter } from './getter.type'

export const getId: Getter<'id'> = (data) => {
    return typeof data[0] === 'object'
        ? data[0].display as string
        : data[0]
}