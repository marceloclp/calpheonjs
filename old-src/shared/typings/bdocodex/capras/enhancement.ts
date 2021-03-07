import { Stats } from "../enums";

export interface Enhancement {
    readonly count: string;

    readonly tcount: string;

    readonly stats: { [keyof in Stats]?: string };
}