import { HeadersBuilder } from "../builders/headers-builder.ts";
import { UrlBuilder } from "../builders/url-builder.ts";
import { RequestMethod } from "../interfaces/request-method.ts";
import { AbstractBuilder } from "../interfaces/builder.ts";

export interface ApiSpec {
    endpoint: string;
    command: ApiCommand;
    urlBuilder: UrlBuilder;
    bodyBuilder: AbstractBuilder<ReadableStream>;
    headersBuilder: HeadersBuilder;
}

export interface ApiCommand {
    method: RequestMethod;
    uri: string;
}
