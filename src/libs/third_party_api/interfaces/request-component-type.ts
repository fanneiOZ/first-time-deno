export enum RequestComponentType {
    RequestInfo = 'requestInfo',
    Headers = 'headers',
    Body = 'body',
    Url = 'url',
    Abstract = ''

}

export type RequestComponent = Headers | ReadableStream<Uint8Array> | string | undefined
