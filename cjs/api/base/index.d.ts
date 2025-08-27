type AveApiBaseUrls = "authenticate" | "agent" | "city" | "quote" | "updateGuide" | "transport" | "shopify_save_token";
export interface IAveApiBase {
    onRequestBase: {
        props: {
            url: AveApiBaseUrls;
            query?: {
                [key: string]: string | number | boolean | undefined;
            };
            body?: object;
        } & Omit<RequestInit, "body">;
    };
}
export declare class AveApiBase {
    private URL_AUTHENTICATE;
    private URL_AGENTE;
    private URL_CITY;
    private URL_QUOTE;
    private URL_UPDATE_GUIA;
    private URL_TRANSPORT;
    private URL_SHOPIFY;
    protected token: string;
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
    protected onRequestBase({ body, method, url, headers, query, }: IAveApiBase["onRequestBase"]["props"]): Promise<any>;
    protected onRequest({ body, url, ...props }: IAveApiBase["onRequestBase"]["props"]): Promise<any>;
}
export {};
