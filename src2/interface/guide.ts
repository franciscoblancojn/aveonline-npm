export interface GuideProps {
    codigo: string;
    mensaje: string;
    numguia: number;
    rutaguia: string;
    archivoguia: any;
    rotulo: string;
    archivorotulo: string;
    rotulozebra: string;
    archivorotulozebra: string;
    transportadora: string;
    codeTransportador: string;
}

export interface GuideResultProps {
    status: string;
    message: string;
    resultado: {
        guia: GuideProps;
    };
}
