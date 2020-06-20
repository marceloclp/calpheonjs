export const getIdFromURL = (url: string): string => {
    return url.split('/').filter(e => e).splice(2).join('/');
}