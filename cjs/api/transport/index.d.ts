import { AveApiBase } from "../base";
export declare class AveApiTransport extends AveApiBase {
    get({ token, idempresa }: {
        token: string;
        idempresa: number;
    }): Promise<any>;
}
