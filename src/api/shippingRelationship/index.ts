import { AveApiBase } from "../base";

export class AveApiShippingRelationship extends AveApiBase {
    async post({ ...props }: { transportadora: string; guias: string[] }) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: ({
                tipo: "relacionEnvios",
                ...props,
            }),
        });
    }
}
