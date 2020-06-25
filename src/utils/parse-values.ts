export const parseIntValue = (raw?: string | number, val = 0) => {
    if (typeof raw === 'number')
        return raw;
    if (typeof raw === 'string')
        return parseInt(raw.replace(/\D/g, '')) || val;
    return val;
}

export const parseFloatValue = (raw?: string | number, val = 0) => {
    if (typeof raw === 'number')
        return raw;
    if (typeof raw === 'string')
        return parseFloat(raw.replace(/\D/g, '')) || val;
    return val;
}

export const parsePercentageValue = (raw: string, val = 0) => {
    return parseFloat(raw.replace(/\%/g, '')) || val;
}