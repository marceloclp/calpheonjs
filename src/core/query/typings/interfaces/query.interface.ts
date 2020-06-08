import { Types } from "../enums";
import { Result } from "./result.interface";
import { Options } from "./options.interface";
import { Descriptor } from "./descriptor.interface";

export interface Query {
    <T>(id: string, type: Types): Promise<Result<T>>;
    <T>(id: string, type: Types, options: Options): Promise<Result<T>>;
    <T>(id: string, type: Descriptor): Promise<Result<T>>;
}