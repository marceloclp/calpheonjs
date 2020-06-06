import { QueryTypes } from "../enums";
import { Result } from "./result.interface";
import { Options } from "./options.interface";
import { Descriptor } from "./descriptor.interface";

export interface IQuery {
    <T>(id: string, type: QueryTypes): Promise<Result<T>>;
    <T>(id: string, type: QueryTypes, options: Options): Promise<Result<T>>;
    <T>(id: string, type: Descriptor): Promise<Result<T>>;
}