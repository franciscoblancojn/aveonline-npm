import { AveApiAgents } from "./agents";
import { IAveApiAuth } from "./auth";
import { AveApiGuide } from "./guide";
import { AveApiPickup } from "./pickup";
import { AveApiQuote } from "./quote";
import { AveApiShippingRelationship } from "./shippingRelationship";
import { AveApiTransport } from "./transport";
export interface IAveApi {
    user: string;
    password: string;
}
export declare class AveApi {
    private data;
    private auth;
    user?: IAveApiAuth["onAuthenticate"]["result"];
    agents: AveApiAgents;
    guide: AveApiGuide;
    pickup: AveApiPickup;
    transport: AveApiTransport;
    quote: AveApiQuote;
    shippingRelationship: AveApiShippingRelationship;
    constructor(data: IAveApi);
    onLoad(): Promise<void>;
}
