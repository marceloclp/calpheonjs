import { join } from "path";
import fs from "fs";

const parsePath = (key: string): string => {
    return join(__dirname, '../data/', key + '.txt');
}

export const has = (key: string): boolean => {
    return fs.existsSync(parsePath(key));
}

export const get = (key: string): string => {
    return fs.readFileSync(parsePath(key), { encoding: 'utf-8' });
}

export const set = (key: string, data: string): string => {
    fs.writeFileSync(parsePath(key), data);
    return data;
}