export interface Stats<T = number> {
    hp: T
    mp: T
    damage: T
    defense: T
    accuracy: T
    evasion: T
    damageReduction: T
    h_damage: T
    h_defense: T
    h_accuracy: T
    h_evasion: T
    h_damageReduction: T
}

export type Stat = keyof Stats

export enum Classes {
    Archer = 'archer',
    Berserker = 'berserker',
    DarkKnight = 'darkKnight',
    Kunoichi = 'kunoichi',
    Lahn = 'lahn',
    Maehwa = 'maehwa',
    Musa = 'musa',
    Mystic = 'mystic',
    Ninja = 'ninja',
    Ranger = 'ranger',
    Sorceress = 'sorceress',
    Striker = 'striker',
    Tamer = 'tamer',
    Valkyrie = 'valkyrie',
    Warrior = 'warrior',
    Witch = 'witch',
    Wizard = 'wizard',
}