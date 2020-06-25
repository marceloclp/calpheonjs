import * as cache from "./cache";
import { fetch } from "../../src/shared/utils";

export const fetchMock = async (url: string, key: string): Promise<string> => {
    if (cache.has(key))
        return cache.get(key);
    const data = await fetch(url);
    return cache.set(key, data);
}