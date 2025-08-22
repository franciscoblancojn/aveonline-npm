"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApiAuth = void 0;
const base_1 = require("../base");
class AveApiAuth extends base_1.AveApiBase {
    async onAuthenticate({ user, password, }) {
        return this.onRequest({
            url: "authenticate",
            method: "POST",
            body: {
                tipo: "auth",
                usuario: user,
                clave: password,
                tiempoToken: 100000,
            },
        });
    }
}
exports.AveApiAuth = AveApiAuth;
