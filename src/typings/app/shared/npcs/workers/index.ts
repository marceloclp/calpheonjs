export { Level } from './level'
export { Stats } from './stats'

// /**
//  * Worker stats are different than player stats.
//  */
// export interface Stats<T = number> {
//     workSpeed: T
//     movementSpeed: T
//     luck: T
//     stamina: T
// }

// // export type Stat = keyof Stats

// export interface Level {
//     sellPrice: number
//     expToNextLvl: number
// }

// /**
//  * Every time a Worker level ups, it will receive a random
//  * bonus increase, defined by a range, for each of its stats.
//  * The range is defined as a tuple.
//  */
// export type Growth = Stats<[number, number]>