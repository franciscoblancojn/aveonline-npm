"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PutGuide = exports.PostGuide = void 0;
const request_1 = require("./request");
const _1 = require("./_");
const PostGuide = async (props) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'generarGuia2',
            codigo: '',
            dsclavex: '',
            plugin: 'npm',
            dsreferencia: '',
            dsordendecompra: '',
            bloquegenerarguia: '1',
            relacion_envios: '1',
            enviarcorreos: '1',
            guiahija: '',
            accesoila: '',
            cartaporte: '',
            unidades: 1,
            ...props,
        },
    });
    return result;
};
exports.PostGuide = PostGuide;
const PutGuide = async (props) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_UPDATE_GUIA,
        method: 'post',
        data: {
            tipo: 'guardarPedidos',
            ...props,
        },
    });
    return result;
};
exports.PutGuide = PutGuide;
