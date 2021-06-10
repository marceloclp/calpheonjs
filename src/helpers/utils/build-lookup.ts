export const buildLookup = <
    TA extends Record<string, string>,
    TB extends Record<string, string>,
    R extends Record<string, string>
>(A: TA, B: TB): R => {
    return Object
        .entries(A)
        .reduce((lookup, [key, value]) => {
            return key in B
                ? { ...lookup, [value]: B[key] }
                : lookup
        }, {} as R)
}