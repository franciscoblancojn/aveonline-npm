"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiShopify = void 0;
const base_1 = require("../base");
class AveApiShopify extends base_1.AveApiBase {
    async onSaveToken({ token, idempresa, "x-shopify-shop-domain": shop, modify, idagente, }) {
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
                idagente,
            },
        });
    }
}
exports.AveApiShopify = AveApiShopify;
//# sourceMappingURL=index.js.map