"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AveApi = void 0;
const agents_1 = require("./agents");
const auth_1 = require("./auth");
const guide_1 = require("./guide");
const pickup_1 = require("./pickup");
const quote_1 = require("./quote");
const shippingRelationship_1 = require("./shippingRelationship");
const transport_1 = require("./transport");
class AveApi {
    data;
    auth;
    user;
    agents;
    guide;
    pickup;
    transport;
    quote;
    shippingRelationship;
    constructor(data) {
        this.data = data;
        this.auth = new auth_1.AveApiAuth();
    }
    async onLoad() {
        const auth = await this.auth.onAuthenticate(this.data);
        this.user = auth;
        this.user.idempresa = auth?.cuentas?.[0]?.usuarios?.[0]?.id;
        const dataAuth = {
            token: auth.token,
            idempresa: auth?.cuentas?.[0]?.usuarios?.[0]?.id,
        };
        this.agents = new agents_1.AveApiAgents(dataAuth);
        this.guide = new guide_1.AveApiGuide(dataAuth);
        this.pickup = new pickup_1.AveApiPickup(dataAuth);
        this.transport = new transport_1.AveApiTransport(dataAuth);
        this.quote = new quote_1.AveApiQuote(dataAuth);
        this.shippingRelationship = new shippingRelationship_1.AveApiShippingRelationship(dataAuth);
    }
}
exports.AveApi = AveApi;
