import { IStats, TStat } from "./stats.interface";

export interface ICaphrasEnhancement {
    stats: IStats & { hp: TStat; mp: TStat; };

    count_next: number;

    count_total: number;
}

export interface ICaphrasWrapper {
    18?: ICaphrasEnhancement[];

    19?: ICaphrasEnhancement[];

    20?: ICaphrasEnhancement[];
}