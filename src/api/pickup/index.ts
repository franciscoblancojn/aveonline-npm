import { AveApiBase } from "../base";

export class AveApiPickup extends AveApiBase {
    async post({ ...props }: { dscom: string; guias: string[] }) {
        return this.onRequest({
            url: "quote",
            method: "POST",
            body: ({
                tipo: "generarRecogida2",
                ...props,
            }),
        });
    }
}
