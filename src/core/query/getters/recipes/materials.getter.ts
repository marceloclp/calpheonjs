import cheerio from 'cheerio'
import { BDO } from '@typings/namespaces'
import { ShortURL } from '@helpers/utils/short-url'
import { substrOf } from '@helpers/utils/substr-of'
import { parseNumber } from '@helpers/utils/parse-number'
import { Getter } from './getter.type'

export const getMaterials: Getter<'materials'> = (data) => {
    const $ = cheerio.load('<div>' + data[6] + '</div>')

    return $('.iconset_wrapper_medium').toArray().map(elem => {
        const { id, type } = ShortURL.decompose(
            $(elem).find('a').attr('href') as string
        )
        const icon = substrOf(
            $(elem).find('.icon_wrapper').text(),
            { left: 'src="', right: '"' },
        )
        const amount = parseNumber(
            $(elem).find('.quantity_small').text(), 1
        )
        return <BDO.LifeSkills.Material>{ id, type, icon, amount }
    })
}