import { App } from "../../../shared/typings";

/**
 * Allows customization of the query environment.
 */
export interface Options {
    readonly locale?: App.Locales;

    readonly db?: App.Dbs;
}