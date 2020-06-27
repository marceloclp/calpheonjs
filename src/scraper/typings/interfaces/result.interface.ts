export interface Result<T = any> {
    /** The parsed url that was used to perform the fetch. */
    readonly url: string;

    readonly type: string;

    readonly data: T;
}