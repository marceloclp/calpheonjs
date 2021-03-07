export interface Stats {
    workSpeed: number
    movementSpeed: number
    luck: number
    stamina: number
}
export type Stat = keyof Stats

export interface Level {
    sellPrice: number
    expToNextLvl: number
}

/**
 * Every time a Worker level ups, it will receive a random
 * bonus increase for each of its stats. The range is defined
 * as a tuple.
 */
export interface Growth extends Record<Stat, [number, number]> {}
