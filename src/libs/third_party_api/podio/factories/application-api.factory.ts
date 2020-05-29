import {RequestFactory} from "../../factories/abstract.request.factory";
import {HeaderBuilder} from "../builders/header.builder";
import {RequestInfoBuilder} from "../builders/request-info.builder";
import {RequestComponentType} from "../../interfaces/request-component-type";

export class ApplicationApiFactory extends RequestFactory {

    public createRequestInfo(bodyData: any): RequestInfo {
        return this.builders[RequestComponentType.RequestInfo]?.build({a: 'test'})
    }

    public createHeaders(headerData: any): Headers {
        return undefined;
    }
}