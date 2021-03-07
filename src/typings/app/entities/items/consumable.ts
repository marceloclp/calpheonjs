import { App } from '@typings/namespaces'
import { Item } from './item'

export interface Consumable extends Item<'consumable'> {
    /** A list of effects caused on item consumption. */
    effects: string[]
    /** Duration of the effects, in seconds. */
    duration: number
    /** Cooldown until the item can be used again, in seconds. */
    cooldown: number
}