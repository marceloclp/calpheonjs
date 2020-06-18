import { App } from "../../../typings";

export interface Options {
    readonly locale?: App.Locales;

    readonly db?: App.Dbs;
}