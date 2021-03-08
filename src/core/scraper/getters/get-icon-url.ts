import { Getter } from './getters.types'

export const getIconURL: Getter<string> = ({ $ }) => {
    const html = $('script[type="application/ld+json"]').html() as string
    return JSON.parse(html).image
}
