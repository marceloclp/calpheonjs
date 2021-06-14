import { Getter } from './getter.type'

export const getRegion: Getter<'region'> = (data) => {
    return data[4].display
}