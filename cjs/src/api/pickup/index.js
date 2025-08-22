"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiPickup = void 0;
const base_1 = require("../base");
class AveApiPickup extends base_1.AveApiBase {
    async post({ ...props }) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: {
                tipo: "generarRecogida2",
                ...props,
            },
        });
    }
}
exports.AveApiPickup = AveApiPickup;
