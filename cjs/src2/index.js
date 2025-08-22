"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aveonline = void 0;
const agents_1 = require("./api/agents");
const auth_1 = require("./api/auth");
const guide_1 = require("./api/guide");
const pickup_1 = require("./api/pickup");
const quote_1 = require("./api/quote");
const shippingRelationship_1 = require("./api/shippingRelationship");
const transport_1 = require("./api/transport");
const Aveonline = ({ config }) => {
    const auth = async () => {
        const result = await (0, auth_1.Auth)(config);
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const getAccounts = async () => {
        const result = await auth();
        return result.cuentas;
    };
    const getAgents = async () => {
        const { token } = await auth();
        const result = await (0, agents_1.GetAgents)({
            token,
            idempresa: config.account.id,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const getTransport = async () => {
        const { token } = await auth();
        const result = await (0, transport_1.GetTransport)({
            token,
            id: config.account.id,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const getQuote = async (data) => {
        const { token } = await auth();
        const result = await (0, quote_1.GetQuote)({
            token,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const generateGuide = async (data) => {
        const { token } = await auth();
        const result = await (0, guide_1.PostGuide)({
            token,
            idempresa: config.account.id,
            origen: config.agent.idciudad,
            dsdirre: config.direction,
            dsbarrioo: '',
            dsnitre: config.nit,
            dstelre: config.phone,
            dscelularre: config.tel,
            dscorreopre: config.email,
            valorMinimo: config.val_min ? 1 : 0,
            envioGratis: config.free_shipping ? 1 : 0,
            idagente: config.agent.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const generatePickup = async (data) => {
        const { token } = await auth();
        const result = await (0, pickup_1.PostPickup)({
            token,
            idempresa: config.account.id,
            idagente: config.agent.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const updateGuide = async (data) => {
        const result = await (0, guide_1.PutGuide)({
            cliente_id: config.account.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    const generateShippingRelationship = async (data) => {
        const { token } = await auth();
        const result = await (0, shippingRelationship_1.PostShippingRelationship)({
            token,
            idempresa: config.account.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    return {
        getAccounts,
        getAgents,
        getTransport,
        getQuote,
        generateGuide,
        generatePickup,
        updateGuide,
        generateShippingRelationship,
    };
};
exports.Aveonline = Aveonline;
