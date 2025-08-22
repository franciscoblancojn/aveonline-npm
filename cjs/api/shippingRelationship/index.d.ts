import { AveApiBase } from "../base";
export declare class AveApiShippingRelationship extends AveApiBase {
    post({ ...props }: {
        transportadora: string;
        guias: string[];
    }): Promise<any>;
}
