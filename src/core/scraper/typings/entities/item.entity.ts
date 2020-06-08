import { Generic } from "./generic.entity";
import { Pricings } from "../interfaces";

export interface Item extends Generic {
    prices: Pricings;
}