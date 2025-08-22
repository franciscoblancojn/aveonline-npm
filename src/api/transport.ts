import { request } from './request';
import { API_URL_TRANSPORT } from './_';

export interface GetTransportProps {
    token: string;
    id: number;
}

export const GetTransport = async ({ token, id }: GetTransportProps) => {
    const result = await request({
        url: API_URL_TRANSPORT,
        method: 'post',
        data: {
            tipo: 'listarTransportadorasPorEmpresaAuth',
            token,
            id,
        },
    });
    return result;
};
