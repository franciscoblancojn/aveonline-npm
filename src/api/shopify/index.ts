import { AveApiBase } from "../base";

export interface IAveApiShopify {
    onSaveToken: {
        props: {
            "x-shopify-shop-domain": string;
            token: string;
            idempresa: number;
            agentId: number;
            modify?: number;
        };
        result: {
            success: boolean;
            data: {
                id_empresa: number;
                url: string;
                token: string;
                updated_at: string;
                created_at: string;
                id: number;
            };
        };
    };
}

export class AveApiShopify extends AveApiBase {
    async onSaveToken({
        token,
        idempresa,
        "x-shopify-shop-domain": shop,
        modify,
        agentId,
    }: IAveApiShopify["onSaveToken"]["props"]): Promise<
        IAveApiShopify["onSaveToken"]["result"]
    > {
        return await this.onRequestBase({
            url: "shopify_save_token",
            method: "POST",
            query: {
                id: idempresa,
            },
            headers: {
                "x-shopify-shop-domain": shop,
                Authorization: `${this.token}`,
            },
            body: {
                token,
                modify,
                agentId,
            },
        });
    }
}
