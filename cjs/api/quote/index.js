"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiQuote = void 0;
const base_1 = require("../base");
class AveApiQuote extends base_1.AveApiBase {
    async get(props) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: {
                tipo: "cotizarDoble",
                access: "",
                ...props,
            },
        });
    }
}
exports.AveApiQuote = AveApiQuote;
//# sourceMappingURL=index.js.map