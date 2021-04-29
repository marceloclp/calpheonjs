interface Boundaries {
    readonly left?: string
    readonly right?: string
}

export const substrOf = (str: string, boundaries: Boundaries): string => {
    const startIdx = !!boundaries.left
        ? str.indexOf(boundaries.left) + boundaries.left.length
        : 0
    const endIdx = !!boundaries.right
        ? str.indexOf(boundaries.right, startIdx)
        : str.length
    if (startIdx !== 0 || endIdx !== str.length)
        return str.substring(startIdx, endIdx)
    return str
}