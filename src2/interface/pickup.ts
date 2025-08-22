export interface PickupProps {
    horaInicial: string;
    horaFinal: string;
    status: string;
    message: string;
    details: {
        codigo: string;
        mensaje: string;
        codigoRecogida: string;
        numeroRecogidaInterna: any;
        numeroRecogidaTransportadora: any;
    };
    guias: string[];
}
export interface PickupGuideProps {
    valoracion: number;
    kilos: number;
    numeroGuias: number;
    idtransportador: string;
    dsconsec: string;
    status: string;
}

export interface PickupResultProps {
    respuestasRecogida: PickupProps[];
    guias: PickupGuideProps[];
}
