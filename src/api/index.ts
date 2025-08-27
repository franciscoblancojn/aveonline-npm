import { AveApiAgents } from "./agents";
import { AveApiAuth, IAveApiAuth } from "./auth";
import { AveApiGuide } from "./guide";
import { AveApiPickup } from "./pickup";
import { AveApiQuote } from "./quote";
import { AveApiShippingRelationship } from "./shippingRelationship";
import { AveApiTransport } from "./transport";
import { AveApiShopify } from "./shopify";

export interface IAveApi {
    typeAuth?: "authenticate" | "authenticate2";
    user: string;
    password: string;
}

export class AveApi {
    private data: IAveApi;
    private auth: AveApiAuth;
    public user?: IAveApiAuth["onAuthenticate"]["result"];
    public user2?: IAveApiAuth["onAuthenticate2"]["result"];

    public agents: AveApiAgents;
    public guide: AveApiGuide;
    public pickup: AveApiPickup;
    public transport: AveApiTransport;
    public quote: AveApiQuote;
    public shippingRelationship: AveApiShippingRelationship;
    public shopify: AveApiShopify;

    constructor(data: IAveApi) {
        this.data = data;
        this.auth = new AveApiAuth();
        this.agents = new AveApiAgents();
        this.guide = new AveApiGuide();
        this.pickup = new AveApiPickup();
        this.transport = new AveApiTransport();
        this.quote = new AveApiQuote();
        this.shippingRelationship = new AveApiShippingRelationship();
        this.shopify = new AveApiShopify();
    }
    async onLoad() {
        const auth = await this.auth.onAuthenticate(this.data);
        this.user = auth;
        this.user.idempresa = auth?.cuentas?.[0]?.usuarios?.[0]?.id;
        let dataAuth = {
            token: auth.token,
            idempresa: auth?.cuentas?.[0]?.usuarios?.[0]?.id,
        };
        this.agents = new AveApiAgents(dataAuth);
        this.guide = new AveApiGuide(dataAuth);
        this.pickup = new AveApiPickup(dataAuth);
        this.transport = new AveApiTransport(dataAuth);
        this.quote = new AveApiQuote(dataAuth);
        this.shippingRelationship = new AveApiShippingRelationship(dataAuth);

        if (this.data.typeAuth === "authenticate2") {
            const auth2 = await this.auth.onAuthenticate2(this.data);
            this.user2 = auth2;
            dataAuth = {
                token: auth2.data.token,
                idempresa: auth2?.data?.idEnterprise,
            };
        }
        this.shopify = new AveApiShopify(dataAuth);
    }
}
