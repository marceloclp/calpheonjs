import cheerio from 'cheerio'

export const isValidPage = ($: cheerio.Root): boolean => {
    return $('table.smallertext').length !== 0
}