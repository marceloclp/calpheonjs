export const toSnakeCase = (str: string): string => {
    return str.trim().toLowerCase()
        .replace(/ /g, '_').replace(/[\W]+/g, '')
}
