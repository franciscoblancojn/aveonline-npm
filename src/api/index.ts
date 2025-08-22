import { AveApiAgents } from "./agents";
import { AveApiAuth, IAveApiAuth } from "./auth";
import { AveApiGuide } from "./guide";
import { AveApiPickup } from "./pickup";
import { AveApiQuote } from "./quote";
import { AveApiShippingRelationship } from "./shippingRelationship";
import { AveApiTransport } from "./transport";

export interface IAveApi {
    user: string;
    password: string;
}

export class AveApi {
    private data: IAveApi;
    private auth: AveApiAuth;
    public user: IAveApiAuth["onAuthenticate"]["result"];

    public agents: AveApiAgents;
    public guide: AveApiGuide;
    public pickup: AveApiPickup;
    public transport: AveApiTransport;
    public quote: AveApiQuote;
    public shippingRelationship: AveApiShippingRelationship;

    constructor(data: IAveApi) {
        this.data = data;
        this.auth = new AveApiAuth();
    }
    async onLoad() {
        const auth = await this.auth.onAuthenticate(this.data);
        this.user = auth;
        this.user.idempresa = auth?.cuentas?.[0]?.usuarios?.[0]?.id;
        const dataAuth = {
            token: auth.token,
            idempresa: auth?.cuentas?.[0]?.usuarios?.[0]?.id,
        };
        this.agents = new AveApiAgents(dataAuth);
        this.guide = new AveApiGuide(dataAuth);
        this.pickup = new AveApiPickup(dataAuth);
        this.transport = new AveApiTransport(dataAuth);
        this.quote = new AveApiQuote(dataAuth);
        this.shippingRelationship = new AveApiShippingRelationship(dataAuth);
    }
}
