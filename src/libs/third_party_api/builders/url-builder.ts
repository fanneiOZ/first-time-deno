import { AbstractBuilder } from "../interfaces/builder.ts";
import { RequestComponentType } from "../interfaces/request-component-type.ts";

export class UrlBuilder extends AbstractBuilder<string> {
    protected componentType = RequestComponentType.Url

    public build({params: Record<string, string>, endpoint: string}): string {
        return ''
    }
} 