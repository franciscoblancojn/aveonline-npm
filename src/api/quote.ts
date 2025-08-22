import { CitysType } from '../data/citys';
import { ProductProps } from '../interface/products';
import { request } from './request';
import { API_URL_QUOTE } from './_';

export interface GetQuoteParams {
    idempresa: string;
    origen: CitysType;
    destino: CitysType;
    idasumecosto: 1 | 0;
    contraentrega: 1 | 0;
    contraentregaPayment: 1 | 0;
    valorrecaudo: number;
    productos: ProductProps[];
    valorMinimo: 1 | 0;
}
export interface GetQuoteProps extends GetQuoteParams {
    token: string;
}

export const GetQuote = async (props: GetQuoteProps) => {
    const result = await request({
        url: API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'cotizarDoble',
            access: '',
            ...props,
        },
    });
    return result;
};
