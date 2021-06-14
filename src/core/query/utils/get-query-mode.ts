import { Descriptor } from '../typings'
import { DESCRIPTORS_TO_MODES } from '../config/constants'

/** Returns the mode associated with a descriptor if it exists. */
export function getQueryMode(descriptor: Descriptor) {
    const key = DESCRIPTORS_TO_MODES.parseKey(descriptor)
    if (key in DESCRIPTORS_TO_MODES)
        return DESCRIPTORS_TO_MODES[key]
    throw new Error(
        `Invalid or unsupported query descriptor could not be mapped into a mode. ` +
        'Please report this error by opening an issue on the GitHub page.'
    )
}