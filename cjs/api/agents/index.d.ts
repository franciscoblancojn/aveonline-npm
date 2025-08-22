import { AveApiBase } from "../base";
export declare class AveApiAgents extends AveApiBase {
    get({ token, idempresa }: {
        token: string;
        idempresa: number;
    }): Promise<any>;
}
