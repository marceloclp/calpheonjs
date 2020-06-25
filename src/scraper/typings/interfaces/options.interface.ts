import { App } from "../../../shared/typings";

export interface Options {
    readonly locale?: App.Locales;

    readonly db?: App.Dbs;
}