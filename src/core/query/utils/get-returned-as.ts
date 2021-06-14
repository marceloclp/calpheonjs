import { Modes } from '../typings'
import { MODES_TO_RETURNED_AS } from '../config/constants'

export function getReturnedAs<M extends Modes>(mode: M) {
    if (mode in MODES_TO_RETURNED_AS)
        return MODES_TO_RETURNED_AS[mode]
    throw new Error(
        `Invalid or unsupported mode ${mode} could not be mapped to a return type. ` +
        'Please report this error by opening an issue on the GitHub page.'
    )
}