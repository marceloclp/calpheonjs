export const insertUtils = <T>(target: any, utils: object): T => {
    Object.entries(utils).forEach(
        ([key, util]) => { target[key] = util }
    );
    return target as T;
}