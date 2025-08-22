"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiBase = void 0;
class AveApiBase {
    URL_AUTHENTICATE = "https://app.aveonline.co/api/comunes/v1.0/autenticarusuario.php";
    URL_AGENTE = "https://app.aveonline.co/api/comunes/v1.0/agentes.php";
    URL_CITY = "https://app.aveonline.co/api/box/v1.0/ciudad.php";
    URL_QUOTE = "https://app.aveonline.co/api/nal/v1.0/generarGuiaTransporteNacional.php";
    URL_UPDATE_GUIA = "https://app.aveonline.co/api/nal/v1.0/plugins/wordpress.php";
    URL_TRANSPORT = "https://app.aveonline.co/api/box/v1.0/transportadora.php";
    token;
    idempresa;
    constructor({ token, idempresa, } = {}) {
        this.token = token ?? "";
        this.idempresa = idempresa ?? 0;
    }
    getUrl(key) {
        switch (key) {
            case "authenticate":
                return this.URL_AUTHENTICATE;
            case "agent":
                return this.URL_AGENTE;
            case "city":
                return this.URL_CITY;
            case "quote":
                return this.URL_QUOTE;
            case "updateGuide":
                return this.URL_UPDATE_GUIA;
            case "transport":
                return this.URL_TRANSPORT;
            default:
                throw new Error("Invalid API key");
        }
    }
    onSaveAuth({ token, idempresa, }) {
        this.token = token ?? this.token;
        this.idempresa = idempresa ?? this.idempresa;
    }
    async onRequest({ body = undefined, method = "GET", url, }) {
        try {
            let data = undefined;
            if (body) {
                if (this.token) {
                    body = {
                        ...body,
                        token: this.token,
                    };
                }
                if (this.idempresa) {
                    body = {
                        ...body,
                        idempresa: this.idempresa,
                    };
                }
                data = JSON.stringify(body);
            }
            const respond = await fetch(`${this.getUrl(url)}`, {
                headers: {
                    accept: "application/json",
                },
                body: data,
                method,
            });
            const result = await respond.json();
            return result;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.AveApiBase = AveApiBase;
