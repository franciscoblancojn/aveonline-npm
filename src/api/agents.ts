import { request } from './request';
import { API_URL_AGENTE } from './_';

export interface GetAgentsProps {
    token: string;
    idempresa: number;
}

export const GetAgents = async ({ token, idempresa }: GetAgentsProps) => {
    const result = await request({
        url: API_URL_AGENTE,
        method: 'post',
        data: {
            tipo: 'listarAgentesPorEmpresaAuth',
            token,
            idempresa,
        },
    });
    return result;
};
