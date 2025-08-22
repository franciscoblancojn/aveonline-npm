import { AveApiBase } from "../base";

export interface IAveApiAuth {
    onAuthenticate: {
        props: {
            user: string;
            password: string;
        };
        result: {
            status: string;
            message: string;
            token: string;
            idempresa: number;
            cuentas: Array<{
                servicio: string;
                usuarios: Array<{
                    id: number;
                    documento: string;
                    usuario: string;
                    nombre: string;
                    razon: string;
                    asesorlogistico: string;
                    nombreasesor: string;
                }>;
            }>;
        };
    };
}

export class AveApiAuth extends AveApiBase {
    async onAuthenticate({
        user,
        password,
    }: IAveApiAuth["onAuthenticate"]["props"]): Promise<IAveApiAuth["onAuthenticate"]["result"]> {
        return this.onRequest({
            url: "authenticate",
            method: "POST",
            body: {
                tipo: "auth",
                usuario: user,
                clave: password,
                tiempoToken: 100000,
            },
        });
    }
}
