import * as cache from "./cache";
import { fetch } from "../../src/shared/utils";

export const fetchMock = async (url: string, key: string): Promise<string | null> => {
    if (cache.has(key)) {
        const str = cache.get(key);
        return str === 'null' ? null : str;
    }
    const data = await fetch(url);
    return cache.set(key, data || 'null');
}