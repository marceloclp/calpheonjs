import { Enhancement } from "./enhancement";
import { Stats } from "../enums";

export interface Data {
    readonly 18: Enhancement[];

    readonly 19: Enhancement[];

    readonly 20: Enhancement[];

    readonly stats_names: { [keyof in Stats]?: string };
}