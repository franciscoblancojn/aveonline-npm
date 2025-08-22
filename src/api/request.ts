import axios from 'axios';

export interface requestProps {
    method?: 'get' | 'post' | 'put' | 'delete';
    url: string;
    data?: {
        [key: string]: any;
    };
    headers?: {
        [key: string]: any;
    };
    params?: {
        [key: string]: any;
    };
}

export type requestResultStatus = 'ok' | 'error';

export interface requestResult {
    type: requestResultStatus;
    result?: any;
    error?: any;
}

export type requestFuntion = (config: requestProps) => Promise<requestResult>;

export const request: requestFuntion = async (config: requestProps) => {
    try {
        const response = await axios(config);
        return {
            type: 'ok',
            result: response.data,
        };
    } catch (error: any) {
        return {
            type: 'error',
            error,
        };
    }
};
