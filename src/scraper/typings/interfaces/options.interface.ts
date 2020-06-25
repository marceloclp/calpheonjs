import { App } from "../../../shared";

export interface Options {
    readonly locale?: App.Locales;

    readonly db?: App.Dbs;
}