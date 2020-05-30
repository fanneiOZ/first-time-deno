import {RequestMethod} from "../interfaces/request-method.ts";

export class RequestBase<T> implements Request {
    readonly cache: RequestCache = "default"
    readonly credentials: RequestCredentials = "include"
    readonly destination: RequestDestination = ""
    readonly headers: Headers
    readonly integrity: string = ""
    readonly isHistoryNavigation: boolean = false
    readonly isReloadNavigation: boolean = false
    readonly keepalive: boolean = false
    readonly method: string
    readonly mode: RequestMode = "cors"
    readonly redirect: RequestRedirect = "manual"
    readonly referrer: string = ""
    readonly referrerPolicy: ReferrerPolicy = "no-referrer"
    readonly signal: AbortSignal = new AbortSignal()
    readonly url: string
    readonly body: ReadableStream<Uint8Array> | null
    readonly bodyUsed: boolean

    constructor(
        method: RequestMethod,
        url: string,
        body: ReadableStream,
        headers?: Headers
    ) {
        this.method = method
        this.url = url
        this.body = body ?? null
        this.headers = headers ?? new Headers()
        this.bodyUsed = !!body
    }

    arrayBuffer(): Promise<ArrayBuffer> {
        return Promise.resolve(new ArrayBuffer(10))
    }

    blob(): Promise<Blob> {
        return Promise.resolve(new Blob())
    }

    formData(): Promise<FormData> {
        const a: FormData = new FormData();
        a.append('a', '0')
        return Promise.resolve(a)
    }

    json(): Promise<any> {
        return Promise.resolve("")
    }

    text(): Promise<string> {
        return Promise.resolve("")
    }

    clone(): Request {
        return this;
    }
}