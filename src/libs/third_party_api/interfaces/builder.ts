import {RequestComponentType, RequestComponent} from "./request-component-type.ts";
import { BaseData } from "./base-data.ts";

export abstract class AbstractBuilder<T extends RequestComponent> {
    protected componentType: RequestComponentType = RequestComponentType.Abstract

    public getComponentType(): RequestComponentType {
        return this.componentType
    }

    public abstract build(inputs: Partial<BaseData<any>>, ...props: any[]): T;
}