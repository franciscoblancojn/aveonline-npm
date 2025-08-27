import { AveApiBase } from "../base";
export interface IAveApiShopify {
    onSaveToken: {
        props: {
            "x-shopify-shop-domain": string;
            token: string;
            idempresa: number;
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
export declare class AveApiShopify extends AveApiBase {
    onSaveToken({ token, idempresa, "x-shopify-shop-domain": shop, }: IAveApiShopify["onSaveToken"]["props"]): Promise<IAveApiShopify["onSaveToken"]["result"]>;
}
