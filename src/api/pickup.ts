import { request } from './request';
import { API_URL_QUOTE } from './_';

export interface PostPickupParams {
    dscom: string;
    guias: string[];
}
export interface PostPickupProps extends PostPickupParams {
    token: string;
    idempresa: number;
    idagente: number;
}

export const PostPickup = async (props: PostPickupProps) => {
    const result = await request({
        url: API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'generarRecogida2',
            ...props,
        },
    });
    return result;
};
