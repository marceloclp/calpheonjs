import * as Enums from "../../enums";
import { Stat } from "../../types";

export type Stats = Partial<Record<Enums.Stats, Stat>>;