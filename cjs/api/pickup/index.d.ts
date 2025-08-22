import { AveApiBase } from "../base";
export declare class AveApiPickup extends AveApiBase {
    post({ ...props }: {
        dscom: string;
        guias: string[];
    }): Promise<any>;
}
