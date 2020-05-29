import trim from "lodash.trim";
import { DECORATION_CHARS, EMPTY_STR } from "../constants";

export const cleanStr = (str?: string, chars = EMPTY_STR): string => {
    return trim(str, chars + DECORATION_CHARS).replace(/\&apos;/g, "'");
}