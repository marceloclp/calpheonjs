export class UnknownFound extends Error {
    constructor(name: string, id: string, type: string, locale: string) {
        super('')
        this.message =
            `Unknown ${name} found for /${locale}/${type}/${id}. ` +
            'Please report this error by opening an issue on the GitHub page.'
        const capitalizedName = name[0].toUpperCase() + name.substr(1)
        this.name = `Unknown${capitalizedName}FoundError`
    }
}
