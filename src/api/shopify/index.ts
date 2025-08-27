import { AveApiBase } from "../base";

export class AveApiShopify extends AveApiBase {
    async get({ token, idempresa }: { token: string; idempresa: number }) {
        return this.onRequest({
            url: "agent",
            method: "POST",
            body: {
                tipo: "listarAgentesPorEmpresaAuth",
                token,
                idempresa,
            },
        });
    }
}
