type AveApiBaseUrls = "authenticate" | "agent" | "city" | "quote" | "updateGuide" | "transport";
export declare class AveApiBase {
    private URL_AUTHENTICATE;
    private URL_AGENTE;
    private URL_CITY;
    private URL_QUOTE;
    private URL_UPDATE_GUIA;
    private URL_TRANSPORT;
    private token;
    private idempresa;
    constructor({ token, idempresa, }?: {
        token?: string;
        idempresa?: number;
    });
    private getUrl;
    protected onSaveAuth({ token, idempresa, }: {
        token?: string;
        idempresa?: number;
    }): void;
    protected onRequest({ body, method, url, }: {
        url: AveApiBaseUrls;
        body?: object;
    } & Omit<RequestInit, "body">): Promise<any>;
}
export {};
