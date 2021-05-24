import { expect as expectJest } from '@jest/globals'

export const expect = <T>(received: T) => {
    return {
        toBe: function (expected: T) {
            if (typeof expected === 'undefined')
                expectJest(true).toBeTruthy()
            else expectJest(received).toBe(expected)
        },
        toMatch: function (expected: T) {
            if (typeof expected === 'undefined')
                expectJest(true).toBeTruthy()
            else expectJest(received).toMatchObject(expected as any)
        },
        toDeepMatch: function (expected: T) {
            if (typeof expected === 'undefined')
                expectJest(true).toBeTruthy()
            else expectJest(received).toEqual(expected)
        },
        toMatchRegardless: function (expected: T) {
            if (typeof expected === 'undefined')
                expectJest(true).toBeTruthy()
            else if (typeof received === 'object')
                expectJest(received).toMatchObject(expected as any)
            else expectJest(received).toBe(expected)
        }
    }
}