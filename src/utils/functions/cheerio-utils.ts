interface FilterOptions<T> {
    readonly transformFn?: (elem: CheerioElement) => T;

    readonly limit?: number;

    readonly maxLvl?: number;
}

export const deepFilter = <T = CheerioElement>(
    elems: CheerioElement[],
    filterFn: (elem: CheerioElement) => boolean = () => true,
    options?: FilterOptions<T>,
): T[] => {
    const {
        transformFn,
        limit,
        maxLvl
    } = options || {};

    let toCheck = elems;
    const arr = [];
    let idx = 0;

    while (idx < toCheck.length) {
        const child = toCheck[idx];
        
        if (filterFn(child)) {
            if (transformFn)
                arr.push(transformFn(child))
            else arr.push(child);
        }

        if (arr.length <= (limit as number)) {
            break;
        }

        if (child.type === 'tag' && child.children?.length) {
            toCheck = [
                ...toCheck.slice(0, idx + 1),
                ...child.children,
                ...toCheck.slice(idx + 1),
            ];
        }
        idx++;
    }

    return arr as any as T[];
}