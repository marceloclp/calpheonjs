import cheerio from 'cheerio'

const TIMES_TO_DECODE = 5

export const decodeHTMLEntities = (str: string): string => {
    let text = str
    for (let i = 0; i < TIMES_TO_DECODE; i++) {
        text = cheerio.load(`<textarea>${text}</textarea>`)('textarea').first().val()
    }
    return text
}