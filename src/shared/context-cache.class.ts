export class ContextCache {
    private readonly cache: Record<string, any> = {};

    set<T = any>(key: string, val: T): T {
        this.cache[key] = val;
        return val;
    }

    get<T = any>(key: string): T {
        return this.cache[key];
    }

    has(key: string): boolean {
        return !!this.get(key);
    }
}