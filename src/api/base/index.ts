type AveApiBaseUrls =
    | "authenticate"
    | "agent"
    | "city"
    | "quote"
    | "updateGuide"
    | "transport";

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

    private token: string;
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

    protected async onRequest({
        body = undefined,
        method = "GET",
        url,
    }: {
        url: AveApiBaseUrls;
        body?: object;
    } & Omit<RequestInit, "body">) {
        try {
            let data: string | undefined = undefined;
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
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}
