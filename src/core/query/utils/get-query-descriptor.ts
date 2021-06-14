import { Modes } from '../typings'
import { MODES_TO_DESCRIPTORS } from '../config/constants'

/** Returns the descriptor associated with a query mode. */
export function getQueryDescriptor(mode: Modes) {
    if (mode in MODES_TO_DESCRIPTORS)
        return MODES_TO_DESCRIPTORS[mode]
    throw new Error(
        `Invalid or unsupported mode ${mode} could not be mapped to a descriptor. ` +
        'Please report this error by opening an issue on the GitHub page.'
    )
}