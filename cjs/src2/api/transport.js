"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTransport = void 0;
const request_1 = require("./request");
const _1 = require("./_");
const GetTransport = async ({ token, id }) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_TRANSPORT,
        method: 'post',
        data: {
            tipo: 'listarTransportadorasPorEmpresaAuth',
            token,
            id,
        },
    });
    return result;
};
exports.GetTransport = GetTransport;
