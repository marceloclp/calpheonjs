export interface Stats {
    hp: number
    mp: number
    damage: number
    defense: number
    accuracy: number
    evasion: number
    damageReduction: number
    h_damage: number
    h_defense: number
    h_accuracy: number
    h_evasion: number
    h_damageReduction: number
}
export type Stat = keyof Stats
