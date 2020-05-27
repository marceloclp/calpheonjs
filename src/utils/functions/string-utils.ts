import trim from "lodash.trim";

/**
 * Checks if a string contains one of the provided substrings. Substrings are in
 * order of priority.
 * 
 * @param str - The string to match for substrings.
 * @param substrs - The array of substrings to search for.
 * @param startIdx - An optional startind index to start the search from.
 */
export const indexFromArr = (
    str: string,
    substrs: string[],
    startIdx?: number
): { idx: number, substr?: string } => {
    for (let substr of substrs) {
        const idx = str.indexOf(substr, startIdx);
        if (idx >= 0) return { idx, substr };
    }
    return { idx: -1 };
}

export const cleanForOutput = <T = string>(
    str: string,
    options: {
        readonly trimChars?: string;
        readonly replaceTuples?: [RegExp | string, string][];
        readonly applyReplaces?: boolean;
        readonly transformFn?: (str: string) => T
    } = {},
): T => {
    let clean = str;

    // Trim leftovers from parsing HTML.
    clean = trim(str, (options.trimChars ?? '') + ' -–\n');

    // Replaces invalid characters (eg. `&apos;` becomes `'`).
    if (options.applyReplaces || options.replaceTuples) {
        clean = [
            [/\&apos;/, "'"],
            ...(options.replaceTuples ?? []),
        ].reduce((str, [match, replc]) => {
            return str.replace(match, replc as string);
        }, clean);
    }

    if (options.transformFn)
        return options.transformFn(clean);
    return clean as any as T;
}

export const splitAtSubstrs = (
    str: string,
    start: string[] = [],
    end: string[] = [],
    options: {
        readonly ignoreStartSubstrLength?: boolean;
        readonly ignoreEndSubstrLength?: boolean;
        readonly failOnStartUnmatch?: boolean;
        readonly failOnEndUnmatch?: boolean;
    } = {}
): string | null => {
    let startIdx = 0, endIdx = str.length;

    if (start.length) {
        const { idx, substr } = indexFromArr(str, start);

        if (options.failOnStartUnmatch && idx === -1)
            return null;
        
        startIdx = idx;
        if (!options.ignoreStartSubstrLength)
            startIdx += (substr as string).length;
    }

    if (end.length) {
        const { idx, substr } = indexFromArr(str, end, startIdx);

        if (options.failOnEndUnmatch && idx === -1)
            return null;

        endIdx = idx;
        if (!options.ignoreEndSubstrLength)
            endIdx += (substr as string).length;
    }

    return str.substring(startIdx, endIdx);
}