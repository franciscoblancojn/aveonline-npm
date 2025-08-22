"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiGuide = void 0;
const base_1 = require("../base");
class AveApiGuide extends base_1.AveApiBase {
    async post(data) {
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
    async put(data) {
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
exports.AveApiGuide = AveApiGuide;
