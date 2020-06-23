import { EntityTypes } from "../enums";
import { Result } from "./result.interface";
import { Options } from "./options.interface";

export interface Scrape {
    <T>(id: string, type: EntityTypes): Promise<Result<T>>;
    <T>(id: string, type: EntityTypes, options: Options): Promise<Result<T>>;
}