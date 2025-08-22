"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiTransport = void 0;
const base_1 = require("../base");
class AveApiTransport extends base_1.AveApiBase {
    async get({ token, idempresa }) {
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
exports.AveApiTransport = AveApiTransport;
