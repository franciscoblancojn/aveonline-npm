import { CitysType } from '../data/citys';

export interface AveonlineConfig {
    active: boolean;
    user: string;
    password: string;
    nit: string;
    direction: string;
    phone: string;
    tel: string;
    email: string;
    account: {
        id: number;
        name: string;
    } | null;
    agent: {
        id: number;
        name: string;
        idciudad: CitysType;
    } | null;
    val_min: boolean;
    free_shipping: boolean;
    min_free_shipping: number;
    fixed_freight: number;
}
