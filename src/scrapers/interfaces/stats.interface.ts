import { StatsEnum } from "../enums/stats.enum";

export type TStat = number | [number, number];

export interface IStats extends Record<StatsEnum, TStat> {}