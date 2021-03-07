export class ContextCache {
    private readonly contexts: Record<string, any> = {};

    for<T extends Record<string, any>>(ctx: string) {
        if (!this.contexts[ctx])
            this.contexts[ctx] = {};
        const layer = this.contexts[ctx] as T;
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