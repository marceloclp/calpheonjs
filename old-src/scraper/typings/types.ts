import { Result } from "./interfaces";

export type ScrapeFn<T = any> = <T>() => Promise<Result<T>>;

export type Stat = number | [number, number];