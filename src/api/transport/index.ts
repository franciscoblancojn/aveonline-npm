import { AveApiBase } from "../base";

export class AveApiTransport extends AveApiBase {
    async get({ token, idempresa }: { token: string; idempresa: number }) {
        return this.onRequest({
            url: "transport",
            method: "POST",
            body: {
                tipo: "listarTransportadorasPorEmpresaAuth",
                token,
                id: idempresa,
            },
        });
    }
}
