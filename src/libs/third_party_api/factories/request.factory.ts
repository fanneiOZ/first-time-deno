import { RequestFactoryInterface } from "../interfaces/request-factory.ts";
import { BaseData } from "../interfaces/base-data.ts";
import { ApiSpec } from "../interfaces/api.ts";
import { RequestBase } from "../interfaces/request-base.ts";

export class RequestFactory implements RequestFactoryInterface {
    public static construct(api: ApiSpec): RequestFactory {
        return new RequestFactory(api)
    }

    private constructor (protected api: ApiSpec) {}

    public create<T>(baseData: BaseData<T>): RequestInfo {
        return new RequestBase<T>(
            this.api.command.method,
            this.api.urlBuilder.build({endpoint: this.api.endpoint, params: baseData.params}),
            this.api.bodyBuilder.build(baseData.raw),
            this.api.headersBuilder.build(baseData.headers)
        )
    }
}


