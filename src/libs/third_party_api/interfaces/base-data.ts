export interface BaseData<T> {
    readonly raw: T;
    readonly headers?: Record<string, string>;
    readonly params?: Record<string, string>;
    readonly endpoint?: string
}