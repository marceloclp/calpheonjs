export enum Mastery {
    Beginner = 'beginner',
    Apprentice = 'apprentice',
    Skilled = 'skilled',
    Professional = 'professional',
    Artisan = 'artisan',
    Master = 'master',
    Guru = 'guru',
}

export enum Processing {
    Shaking = 'shaking',
    Grinding = 'grinding',
    Chopping = 'chopping',
    Drying = 'drying',
    Filtering = 'filtering',
    Heating = 'heating',
    SimpleAlchemy = 'simpleAlchemy',
    SimpleCooking = 'simpleCooking',
    ImperialCuisine = 'imperialCuisine',
    ImperialAlchemy = 'imperialAlchemy',
    /**
     * Note that there are processing recipes and
     * normal recipes of type GuildProcessing.
     */
    GuildProcessing = 'guildProcessing',
    Manufacture = 'manufacture',
}