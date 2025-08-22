import { request } from './request';
import { API_URL_QUOTE } from './_';

export interface PostShippingRelationshipParams {
    transportadora: string;
    guias: string[];
}

export interface PostShippingRelationshipProps
    extends PostShippingRelationshipParams {
    token: string;
    idempresa: number;
}

export const PostShippingRelationship = async (
    props: PostShippingRelationshipProps
) => {
    const result = await request({
        url: API_URL_QUOTE,
        method: 'post',
        data: {
            tipo: 'relacionEnvios',
            ...props,
        },
    });
    return result;
};
