"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const axios_1 = require("axios");
const request = async (config) => {
    try {
        const response = await (0, axios_1.default)(config);
        return {
            type: 'ok',
            result: response.data,
        };
    }
    catch (error) {
        return {
            type: 'error',
            error,
        };
    }
};
exports.request = request;
