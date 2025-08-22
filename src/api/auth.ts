import { request } from './request';
import { API_URL_AUTHENTICATE } from './_';

export interface AuthProps {
    user: string;
    password: string;
}

export const Auth = async ({ user, password }: AuthProps) => {
    const result = await request({
        url: API_URL_AUTHENTICATE,
        method: 'post',
        data: {
            tipo: 'auth',
            usuario: user,
            clave: password,
        },
    });
    return result;
};
