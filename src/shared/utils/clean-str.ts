import trim from "lodash.trim";

export const cleanStr = (str?: string, chars?: string): string => {
    return trim(str, (chars || '') + ' -–\n').replace(/\&apos;/g, "'");
}