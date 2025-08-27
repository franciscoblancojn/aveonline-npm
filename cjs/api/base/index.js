"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiBase = void 0;
class AveApiBase {
    URL_AUTHENTICATE = "https://app.aveonline.co/api/comunes/v1.0/autenticarusuario.php";
    URL_AUTHENTICATE_2 = "https://app.aveonline.co/api/auth/v3.0/index.php";
    URL_AGENTE = "https://app.aveonline.co/api/comunes/v1.0/agentes.php";
    URL_CITY = "https://app.aveonline.co/api/box/v1.0/ciudad.php";
    URL_QUOTE = "https://app.aveonline.co/api/nal/v1.0/generarGuiaTransporteNacional.php";
    URL_UPDATE_GUIA = "https://app.aveonline.co/api/nal/v1.0/plugins/wordpress.php";
    URL_TRANSPORT = "https://app.aveonline.co/api/box/v1.0/transportadora.php";
    URL_SHOPIFY = {
        SAVE_TOKEN: "https://api.aveonline.co/api-shopify/public/api/token",
    };
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
            case "authenticate2":
                return this.URL_AUTHENTICATE_2;
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
            case "shopify_save_token":
                return this.URL_SHOPIFY.SAVE_TOKEN;
            default:
                throw new Error("Invalid API key");
        }
    }
    onSaveAuth({ token, idempresa, }) {
        this.token = token ?? this.token;
        this.idempresa = idempresa ?? this.idempresa;
    }
    async onRequestBase({ body = undefined, method = "GET", url, headers, query = {}, }) {
        try {
            let URL = this.getUrl(url);
            if (query.id !== undefined) {
                URL = `${URL}/${query.id}`;
                delete query.id;
            }
            if (Object.keys(query).length) {
                const queryString = new URLSearchParams(query).toString();
                URL = `${URL}?${queryString}`;
            }
            const respond = await fetch(`${URL}`, {
                headers: {
                    accept: "application/json",
                    "Content-Type": "application/json",
                    ...headers,
                },
                body: JSON.stringify(body),
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
    async onRequest({ body = undefined, url, ...props }) {
        try {
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
            }
            return this.onRequestBase({
                url,
                body,
                ...props,
            });
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.AveApiBase = AveApiBase;
//# sourceMappingURL=index.js.map