type AveApiBaseUrls =
    | "authenticate"
    | "agent"
    | "city"
    | "quote"
    | "updateGuide"
    | "transport"
    | "shopify_save_token";

export interface IAveApiBase {
    onRequestBase: {
        props: {
            url: AveApiBaseUrls;
            query?: { [key: string]: string | number | boolean | undefined };
            body?: object;
        } & Omit<RequestInit, "body">;
    };
}

export class AveApiBase {
    private URL_AUTHENTICATE =
        "https://app.aveonline.co/api/comunes/v1.0/autenticarusuario.php";
    private URL_AGENTE =
        "https://app.aveonline.co/api/comunes/v1.0/agentes.php";
    private URL_CITY = "https://app.aveonline.co/api/box/v1.0/ciudad.php";
    private URL_QUOTE =
        "https://app.aveonline.co/api/nal/v1.0/generarGuiaTransporteNacional.php";
    private URL_UPDATE_GUIA =
        "https://app.aveonline.co/api/nal/v1.0/plugins/wordpress.php";
    private URL_TRANSPORT =
        "https://app.aveonline.co/api/box/v1.0/transportadora.php";

    private URL_SHOPIFY = {
        SAVE_TOKEN: "https://api.aveonline.co/api-shopify/public/api/v1/token/",
    };

    protected token: string;
    private idempresa: number;
    constructor({
        token,
        idempresa,
    }: {
        token?: string;
        idempresa?: number;
    } = {}) {
        this.token = token ?? "";
        this.idempresa = idempresa ?? 0;
    }

    private getUrl(key: AveApiBaseUrls): string {
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
            case "shopify_save_token":
                return this.URL_SHOPIFY.SAVE_TOKEN;
            default:
                throw new Error("Invalid API key");
        }
    }
    protected onSaveAuth({
        token,
        idempresa,
    }: {
        token?: string;
        idempresa?: number;
    }) {
        this.token = token ?? this.token;
        this.idempresa = idempresa ?? this.idempresa;
    }

    protected async onRequestBase({
        body = undefined,
        method = "GET",
        url,
        headers,
        query = {}
    }: IAveApiBase["onRequestBase"]["props"]) {
        try {
            let URL = this.getUrl(url)
            if(query.id !== undefined) {
                URL = `${url}/${query.id}`;
                delete query.id;
            }
            if (Object.keys(query).length) {
                const queryString = new URLSearchParams(
                    query as Record<string, string>
                ).toString();
                URL = `${url}?${queryString}`;
            }
            const respond = await fetch(`${URL}`, {
                headers: {
                    accept: "application/json",
                    ...headers,
                },
                body: JSON.stringify(body),
                method,
            });
            const result = await respond.json();
            return result;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    protected async onRequest({
        body = undefined,
        url,
        ...props
    }:  IAveApiBase["onRequestBase"]["props"]) {
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
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
