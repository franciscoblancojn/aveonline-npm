export interface QuoteProps {
    codTransportadora: string;
    nombreTransportadora: string;
    logoTransportadora: string;
    origen: string;
    destino: string;
    unidades: number;
    kilos: number;
    valoracion: string;
    porcentajeValoracion: string;
    codigoTrayecto: string;
    trayecto: string;
    tipoEnvio: string;
    fletexkilo: number;
    fletexunidad: number;
    fletetotal: number;
    diasentrega: string;
    costoManejo: number;
    valorTotal: number;
    valorOtrosRecaudos: number;
    total: number;
    contraentrega: boolean;
}

export interface QuoteResultProps {
    status: string;
    message: string;
    cotizaciones: QuoteProps[];
}
