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