export const toSnakeCase = (str: string): string => {
    return str.trim().toLowerCase().replace(/ /g, '_')
}