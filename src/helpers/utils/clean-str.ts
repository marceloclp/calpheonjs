import { DecorationChars } from '@config/constants'

/**
 * Removes decoration and custom trailing characters from a string.
 * 
 * @param str - The string to be cleaned.
 * @param custom - Additional trailing characters to be removed.
 * @returns the string without the trailing characters.
 */
export const cleanStr = (str?: string, custom: string = ''): string => {
    if (!str || typeof str !== 'string')
        return ''

    const record = (custom + DecorationChars).split('').reduce(
        (obj, char) => ({ ...obj, [char]: true }),
        {} as Record<string, boolean>,
    );

    let startIdx = 0, endIdx = str.length - 1;
    while (record[str[startIdx]])
        startIdx++;
    while (record[str[endIdx]] && endIdx >= startIdx)
        endIdx--;
        
    return str.substring(startIdx, endIdx + 1);
}