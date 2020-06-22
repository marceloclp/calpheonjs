export class ContextCache {
    private readonly cache: Record<string, any> = {};

    for<T extends Record<string, any>>(ctx: string) {
        if (!this.cache[ctx])
            this.cache[ctx] = {};
        const layer = this.cache[ctx] as T;
        return {
            set: <R>(key: keyof T, val: R): R => {
                layer[key] = val as any;
                return layer[key];
            },
            get: <R>(key: keyof T): R => {
                return layer[key];
            },
            has: (key: keyof T): boolean => {
                return !!layer[key];
            }
        }
    }
}