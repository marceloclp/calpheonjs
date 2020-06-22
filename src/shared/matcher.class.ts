import { App } from "../typings";
import { indexOf } from "../utils";

export class Matcher {
    private readonly _cache: Record<string, { idx: number, substr?: string }> = {};

    private readonly _matches: string[];

    private _lastMatchedStr?: string;

    private _length = 0;

    constructor(
        locale: App.Locales,
        matches: Record<App.Locales, string[]>,
    ) {
        this._matches = matches[locale];
    }

    /**
     * Checks if a string contains a match.
     * 
     * @param str - The string to match.
     */
    in(str?: string): boolean {
        if (!str)
            return false;
        if (!this._cache[str])
            this._cache[str] = indexOf(str, this._matches);
        if (this._cache[str].idx === -1)
            return false;
        this._lastMatchedStr = str;
        this._length++;
        return this._cache[str].idx !== -1;
    }

    /**
     * Retrieves the starting index or the ending index of the match.
     * 
     * @param str - The string to match.
     * @param end - Whether to return the starting or ending index.
     */
    indexIn(str?: string, end?: boolean): number {
        if (!str)
            return -1;
        const match = this._cache[str];
        if (!match)
            this.in(str);
        if (!match.substr)
            return -1;
        if (end)
            return match.idx + match.substr.length;
        return match.idx;
    }

    /**
     * Retrieves the match for a given string.
     * 
     * @param str - The string to retrieve the match for.
     */
    matchIn(str?: string): string | undefined {
        if (!str)
            return undefined;
        if (!this._cache[str])
            this.in(str);
        return this._cache[str].substr;
    }

    /**
     * The last string that was evaluated to a successful match.
     */
    get last(): string | undefined {
        return this._lastMatchedStr;
    }

    /**
     * The number of successful matches.
     */
    get length(): number {
        return this._length;
    }
}