export function CreateBuilder<Builder>(): Builder {
    type BuilderFn = (args: any) => any
    
    const lookup: Record<string, BuilderFn> = {}
    let selectedType: string

    /** Creates a predictable id used to index the type/subType builder. */
    function getBuilderKey(type?: string, subType?: string) {
        if (!type) return 'generic'
        if (type && subType) return `${type}-${subType}`
        return type
    }

    return {
        forGeneric: function (builder: BuilderFn) {
            if (getBuilderKey() in lookup)
                throw new Error('Generic builder is being registered twice.')
            lookup[getBuilderKey()] = builder
            return this
        },
        forType: function (type: string, builder: BuilderFn) {
            const builderKey = getBuilderKey(type)
            if (builderKey in lookup)
                throw new Error(`Type ${type} is being registered twice.`)
            lookup[builderKey] = args => ({
                ...lookup[getBuilderKey()](args),
                ...builder(args),
                type,
            })
            selectedType = type
            return this
        },
        forSubType: function (subType: string, builder: BuilderFn) {
            if (!selectedType) {
                throw new Error(
                    `Attempted to register the sub type ${subType} before ` +
                    `registering any type.`
                )
            }
            const builderKey = getBuilderKey(selectedType, subType)
            if (builderKey in lookup)
                throw new Error(`Sub type ${subType} is being registered twice.`)
            lookup[builderKey] = builder
            return this
        },
        create: function (pickBuilder: (key: string) => { type?: string, subType?: string }) {
            return (key: string, data: any) => {
                const { type, subType } = pickBuilder(key)
                const entity = lookup[getBuilderKey(type)](data)

                if (subType || entity.subType) {
                    const lookupKey = getBuilderKey(type, subType || entity.subType)
                    if (!(lookupKey in lookup))
                        return entity
                    return { ...entity, ...lookup[lookupKey](data) }
                }
                return entity
            }
        },
    } as unknown as Builder
}
