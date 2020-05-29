import {AbstractBuilder} from "../../interfaces/builder";
import {RequestComponentType} from "../../interfaces/request-component-type";

export class HeaderBuilder extends AbstractBuilder<Headers, any> {
    protected componentType = RequestComponentType.Headers

    public build(input: any): Headers {
        return undefined;
    }
}