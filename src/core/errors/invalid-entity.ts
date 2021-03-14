export class InvalidEntity extends Error {
    constructor(id: string, type: string, locale: string) {
        super()
        this.message =
            `BDOCodex does not have an entity for /${locale}/${type}/${id}. ` +
            'If you think this is a mistake, please open an issue on the GitHub page.'
        this.name = 'InvalidEntityError'
    }
}