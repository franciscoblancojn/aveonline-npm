"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiShopify = void 0;
const base_1 = require("../base");
class AveApiShopify extends base_1.AveApiBase {
    async onSaveToken({ token, idempresa, "x-shopify-shop-domain": shop, }) {
        return await this.onRequestBase({
            url: "shopify_save_token",
            method: "POST",
            query: {
                id: idempresa,
            },
            headers: {
                "x-shopify-shop-domain": shop,
                "Content-Type": "application/json",
                Authorization: `Bearer ${this.token}`,
            },
            body: {
                token,
            },
        });
    }
}
exports.AveApiShopify = AveApiShopify;
//# sourceMappingURL=index.js.map