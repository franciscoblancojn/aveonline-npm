"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAgents = void 0;
const request_1 = require("./request");
const _1 = require("./_");
const GetAgents = async ({ token, idempresa }) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_AGENTE,
        method: 'post',
        data: {
            tipo: 'listarAgentesPorEmpresaAuth',
            token,
            idempresa,
        },
    });
    return result;
};
exports.GetAgents = GetAgents;
