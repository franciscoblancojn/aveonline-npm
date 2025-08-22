"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiAgents = void 0;
const base_1 = require("../base");
class AveApiAgents extends base_1.AveApiBase {
    async get({ token, idempresa }) {
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
exports.AveApiAgents = AveApiAgents;
//# sourceMappingURL=index.js.map