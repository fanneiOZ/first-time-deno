import {AbstractBuilder} from "../../interfaces/builder";
import {RequestComponentType} from "../../interfaces/request-component-type";

export class RequestInfoBuilder<InputInterface> extends AbstractBuilder<RequestInfo, InputInterface> {
    protected componentType = RequestComponentType.RequestInfo

    public build(input: InputInterface): Request {
        return undefined;
    }
}