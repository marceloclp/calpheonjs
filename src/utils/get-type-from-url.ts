export const getTypeFromURL = (shortUrl: string) => {
    const type = shortUrl.split('/').filter(e => e)[1];
    switch (type) {
        case 'npc':           return 'npc';
        case 'item':          return 'item';
        case 'quest':         return 'quest';
        case 'theme':         return 'knowledge';
        default:              return 'unknown';
    }
}