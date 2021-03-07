import { Types } from "../enums";
import { Result } from "./result.interface";
import { Options } from "./options.interface";

export interface Scrape {
    <T>(id: string, type: Types): Promise<Result<T>>;
    <T>(id: string, type: Types, options: Options): Promise<Result<T>>;
}