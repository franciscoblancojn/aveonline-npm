"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiShippingRelationship = void 0;
const base_1 = require("../base");
class AveApiShippingRelationship extends base_1.AveApiBase {
    async post({ ...props }) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: {
                tipo: "relacionEnvios",
                ...props,
            },
        });
    }
}
exports.AveApiShippingRelationship = AveApiShippingRelationship;
