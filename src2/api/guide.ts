import { CitysType } from '../data/citys';
import { ProductProps } from '../interface/products';
import { request } from './request';
import { API_URL_QUOTE, API_URL_UPDATE_GUIA } from './_';

export interface PostGuideParams {
    destino: CitysType;
    dsdir: string;
    dsbarrio: string;

    dsnit: string;
    dsnombre: string;
    dsnombrecompleto: string;
    dscorreop: string;
    dstel: string;
    dscelular: string;

    idtransportador: string;

    productos: ProductProps[];

    dscontenido: string;
    dscom: string;

    idasumecosto: 1 | 0;
    contraentrega: 1 | 0;
    valorrecaudo: number;
}
export interface PostGuideProps extends PostGuideParams {
    token: string;
    idempresa: number;

    origen: CitysType;
    dsdirre: string;
    dsbarrioo: string;

    dsnitre: string;
    dstelre: string;
    dscelularre: string;
    dscorreopre: string;

    valorMinimo: 1 | 0;
    envioGratis: 1 | 0;

    idagente: number;
}
export const PostGuide = async (props: PostGuideProps) => {
    const result = await request({
        url: API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'generarGuia2',

            codigo: '',
            dsclavex: '',
            plugin: 'npm',
            dsreferencia: '',
            dsordendecompra: '',
            bloquegenerarguia: '1',
            relacion_envios: '1',
            enviarcorreos: '1',
            guiahija: '',
            accesoila: '',
            cartaporte: '',
            unidades: 1,
            ...props,
        },
    });
    return result;
};

export interface PutGuideParams {
    ruta: string;
    guia: string;
    pedido_id: string;
    transportadora_id: string;
}
export interface PutGuideProps extends PutGuideParams {
    cliente_id: number;
}
export const PutGuide = async (props: PutGuideProps) => {
    const result = await request({
        url: API_URL_UPDATE_GUIA,
        method: 'post',
        data: {
            tipo: 'guardarPedidos',
            ...props,
        },
    });
    return result;
};
