/**
 * Removes decoration and custom characters trailing a string.
 * 
 * These are the decoration characters that will always be removed: ` -–\n`.
 * 
 * @param str   - The string to be cleaned.
 * @param chars - Additional trailing characters to be removed.
 */
export const cleanStr = (str?: string, chars?: string): string => {
    if (!str)
        return '';

    const record = ((chars || '') + ' -–\n').split('').reduce(
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