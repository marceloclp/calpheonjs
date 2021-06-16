import { Getter } from './getter.type'

export const getZone: Getter<'zone'> = (data) => {
    return data[3]
}
