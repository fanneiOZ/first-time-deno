import { AbstractBuilder } from "../interfaces/builder.ts";
import { RequestComponentType } from "../interfaces/request-component-type.ts";

export class HeadersBuilder extends AbstractBuilder<Headers> {
    protected componentType = RequestComponentType.Headers

    public build(headers?: Record<string, string>): Headers {
        const resultHeaders = new Headers()

        if (headers){
            Object.keys(headers).forEach(key => resultHeaders.append(key, headers[key]))
        }

        return resultHeaders
    }
}