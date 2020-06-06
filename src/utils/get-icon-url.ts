import { App } from "../typings/app";

export const getIconUrl = (db: App.Dbs, url: string) => {
    return `https://` + db +
        (url.charAt(0) === '/' ? '' : '/') + url;
}