"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostShippingRelationship = void 0;
const request_1 = require("./request");
const _1 = require("./_");
const PostShippingRelationship = async (props) => {
    const result = await (0, request_1.request)({
        url: _1.API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'relacionEnvios',
            ...props,
        },
    });
    return result;
};
exports.PostShippingRelationship = PostShippingRelationship;
