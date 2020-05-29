export const indexOf = (
    str: string,
    substrs: string | string[],
    startIdx = 0,
    includeLength?: boolean,
): { idx: number, substr: string } => {
    const arr = Array.isArray(substrs) ? substrs : [substrs];
    for (let substr of arr) {
        const idx = str.indexOf(substr, startIdx);
        if (idx === -1)
            continue
        if (includeLength)
            return { idx: idx + substr.length, substr };
        return { idx, substr };
    }
    return { idx: -1 } as any;
}