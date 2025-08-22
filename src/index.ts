import { GetAgents } from './api/agents';
import { Auth } from './api/auth';
import {
    PostGuide,
    PostGuideParams,
    PutGuide,
    PutGuideParams,
} from './api/guide';
import { PostPickup, PostPickupParams } from './api/pickup';
import { GetQuote, GetQuoteParams } from './api/quote';
import {
    PostShippingRelationship,
    PostShippingRelationshipParams,
} from './api/shippingRelationship';
import { GetTransport } from './api/transport';
import { AgentsResultProps } from './interface/agents';
import { AuthResultProps } from './interface/auth';
import { AveonlineConfig } from './interface/config';
import { GuideResultProps } from './interface/guide';
import { PickupResultProps } from './interface/pickup';
import { QuoteResultProps } from './interface/quote';
import { TransportResultProps } from './interface/transport';

export interface AveonlineProps {
    config: AveonlineConfig;
}

export const Aveonline = ({ config }: AveonlineProps) => {
    const auth = async () => {
        const result = await Auth(config);
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as AuthResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const getAccounts = async () => {
        const result = await auth();
        return result.cuentas;
    };
    const getAgents = async () => {
        const { token } = await auth();
        const result = await GetAgents({
            token,
            idempresa: config.account.id,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as AgentsResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const getTransport = async () => {
        const { token } = await auth();
        const result = await GetTransport({
            token,
            id: config.account.id,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as TransportResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const getQuote = async (data: GetQuoteParams) => {
        const { token } = await auth();
        const result = await GetQuote({
            token,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as QuoteResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const generateGuide = async (data: PostGuideParams) => {
        const { token } = await auth();
        const result = await PostGuide({
            token,
            idempresa: config.account.id,

            origen: config.agent.idciudad,
            dsdirre: config.direction,
            dsbarrioo: '',

            dsnitre: config.nit,
            dstelre: config.phone,
            dscelularre: config.tel,
            dscorreopre: config.email,

            valorMinimo: config.val_min ? 1 : 0,
            envioGratis: config.free_shipping ? 1 : 0,

            idagente: config.agent.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as GuideResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const generatePickup = async (data: PostPickupParams) => {
        const { token } = await auth();
        const result = await PostPickup({
            token,
            idempresa: config.account.id,
            idagente: config.agent.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result as PickupResultProps;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const updateGuide = async (data: PutGuideParams) => {
        const result = await PutGuide({
            cliente_id: config.account.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };

    const generateShippingRelationship = async (
        data: PostShippingRelationshipParams
    ) => {
        const { token } = await auth();
        const result = await PostShippingRelationship({
            token,
            idempresa: config.account.id,
            ...data,
        });
        if (result.type == 'ok') {
            if (result.result.status == 'ok') {
                return result.result;
            }
        }
        throw {
            type: 'error',
            ...result.error,
            ...result.result,
        };
    };
    return {
        getAccounts,
        getAgents,
        getTransport,
        getQuote,
        generateGuide,
        generatePickup,
        updateGuide,
        generateShippingRelationship,
    };
};
