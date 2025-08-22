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
export class AveApiQuote extends AveApiBase {
    async get({ ...props }: AveApiQuote["getProps"]) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: {
                tipo: "cotizarDoble",
                access: "",
                ...props,
            },
        });
    }
}
