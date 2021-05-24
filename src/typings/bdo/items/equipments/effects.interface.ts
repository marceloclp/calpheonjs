export interface Effects {
    /** A list of effects caused by the item on a given enhancement level. */
    item: string[]

    /** A list of effects caused by the enhancement level itself. */
    enhancement: string[]

    /** A list of additional effects at a certain enhancement level. */
    additional: string[]
    
    /** A list of effects caused by equiping a number of set pieces. */
    set: Record<number, string[]>
}
