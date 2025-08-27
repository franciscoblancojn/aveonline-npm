import { AveApiAgents } from "./agents";
import { IAveApiAuth } from "./auth";
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
export declare class AveApi {
    private data;
    private auth;
    user?: IAveApiAuth["onAuthenticate"]["result"];
    user2?: IAveApiAuth["onAuthenticate2"]["result"];
    agents: AveApiAgents;
    guide: AveApiGuide;
    pickup: AveApiPickup;
    transport: AveApiTransport;
    quote: AveApiQuote;
    shippingRelationship: AveApiShippingRelationship;
    shopify: AveApiShopify;
    constructor(data: IAveApi);
    onLoad(): Promise<void>;
}
