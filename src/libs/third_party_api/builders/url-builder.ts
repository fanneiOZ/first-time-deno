import { AbstractBuilder } from "../interfaces/builder.ts";
import { RequestComponentType } from "../interfaces/request-component-type.ts";

export class UrlBuilder extends AbstractBuilder<string> {
    protected componentType = RequestComponentType.Url

    public build(inputs: {endpoint: string, params?: Record<string, string>}): string {
        return inputs.endpoint
    }
} 