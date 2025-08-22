import { CitysType } from "../../data/citys";
import { IProduct } from "../../interface/products";
import { AveApiBase } from "../base";

export class AveApiGuide extends AveApiBase {
    async post(data: {
        origen: CitysType;
        dsdirre: string;
        dsbarrioo: string;

        dsnitre: string;
        dstelre: string;
        dscelularre: string;
        dscorreopre: string;

        valorMinimo: 1 | 0;
        envioGratis: 1 | 0;

        idagente: number;
        destino: CitysType;
        dsdir: string;
        dsbarrio: string;

        dsnit: string;
        dsnombre: string;
        dsnombrecompleto: string;
        dscorreop: string;
        dstel: string;
        dscelular: string;

        idtransportador: string;

        productos: IProduct[];

        dscontenido: string;
        dscom: string;

        idasumecosto: 1 | 0;
        contraentrega: 1 | 0;
        valorrecaudo: number;
    }) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: {
                tipo: "generarGuia2",

                codigo: "",
                dsclavex: "",
                plugin: "npm",
                dsreferencia: "",
                dsordendecompra: "",
                bloquegenerarguia: "1",
                relacion_envios: "1",
                enviarcorreos: "1",
                guiahija: "",
                accesoila: "",
                cartaporte: "",
                unidades: 1,
                ...data,
            },
        });
    }
    async put(data: {
        cliente_id: number;
        ruta: string;
        guia: string;
        pedido_id: string;
        transportadora_id: string;
    }) {
        return this.onRequest({
            url: "updateGuide",
            method: "POST",
            body: {
                tipo: "guardarPedidos",
                ...data,
            },
        });
    }
}
