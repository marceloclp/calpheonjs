import { Result } from "./interfaces";

export type ScrapeFn = <T = any>() => Promise<Result<T>>;

export type Stat = number | [number, number];