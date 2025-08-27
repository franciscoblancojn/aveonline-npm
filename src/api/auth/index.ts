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
    onAuthenticate2: {
        props: {
            user: string;
            password: string;
        };
        result: {
            status: string;
            message: string;
            data: {
                id: number;
                document: number;
                imagen: string;
                user: string;
                name: string;
                email: string;
                razon: string;
                logisticAdvisorId: number;
                logisticAdvisorName: string;
                idEnterprise: number;
                idActive: number;
                route: string;
                onlyCounterDelivery: boolean;
                moneyCollectionService: boolean;
                rol: string;
                isRegisteredOnboardingV2: boolean;
                guidesInformation: {
                    generated: boolean;
                    novalty: boolean;
                };
                task: Array<any>;
                accessRedirect: string;
                token: string;
                tokenBody: string;
                logisticAdvisorContactNumber: string;
                idAgentUser: number;
                idAgent: number;
                indicativo: string;
            };
        };
    };
}

export class AveApiAuth extends AveApiBase {
    async onAuthenticate({
        user,
        password,
    }: IAveApiAuth["onAuthenticate"]["props"]): Promise<
        IAveApiAuth["onAuthenticate"]["result"]
    > {
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
    async onAuthenticate2({
        user,
        password,
    }: IAveApiAuth["onAuthenticate2"]["props"]): Promise<
        IAveApiAuth["onAuthenticate2"]["result"]
    > {
        return this.onRequest({
            url: "authenticate2",
            method: "POST",
            body: {
                tipo: "AuthProduct",
                user,
                password,
                tiempoToken: 100000,
            },
        });
    }
}
