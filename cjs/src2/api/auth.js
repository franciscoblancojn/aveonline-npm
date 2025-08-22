"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const request_1 = require("./request");
const _1 = require("./_");
const Auth = async ({ user, password }) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_AUTHENTICATE,
        method: 'post',
        data: {
            tipo: 'auth',
            usuario: user,
            clave: password,
        },
    });
    return result;
};
exports.Auth = Auth;
