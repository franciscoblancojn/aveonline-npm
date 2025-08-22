import { CitysType } from "../../data/citys";
import { IProduct } from "../../interface/products";
import { AveApiBase } from "../base";
export interface AveApiQuote {
    getProps: {
        idempresa: string;
        origen: CitysType;
        destino: CitysType;
        idasumecosto: 1 | 0;
        contraentrega: 1 | 0;
        contraentregaPayment: 1 | 0;
        valorrecaudo: number;
        productos: IProduct[];
        valorMinimo: 1 | 0;
    };
}
export declare class AveApiQuote extends AveApiBase {
    get(props: AveApiQuote["getProps"]): Promise<any>;
}
