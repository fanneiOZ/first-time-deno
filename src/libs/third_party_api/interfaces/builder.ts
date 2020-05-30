import { RequestComponentType, RequestComponent } from "./request-component-type.ts";
import { BaseData } from "./base-data.ts"

export type BuilderInputs = BaseData<any> | Partial<BaseData<any> | undefined>

export abstract class AbstractBuilder<T extends RequestComponent> {
    protected abstract componentType: RequestComponentType

    public getComponentType(): RequestComponentType {
        return this.componentType
    }

    public abstract build(inputs: BuilderInputs, ...props: any[]): T;
}