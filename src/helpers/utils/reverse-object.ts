export function reverseObject<
    L extends string,
    R extends string,
    O extends Record<L, R>
>(object: O): Record<R, L> {
    return Object.fromEntries(
        Object.entries(object).map(pair => pair.reverse())
    )
}