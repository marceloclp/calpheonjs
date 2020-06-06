import { indexOf } from "./index-of"

export const splitStr = (
    str: string,
    start: string | string[],
    end: string | string[],
): string | null => {
    const { idx: startIdx } = indexOf(str, start, 0, true);
    if (startIdx === -1)
        return null;
    
    const { idx: endIdx } = indexOf(str, end, startIdx);
    if (endIdx === -1)
        return str.substring(startIdx, str.length);
    return str.substring(startIdx, endIdx);
}