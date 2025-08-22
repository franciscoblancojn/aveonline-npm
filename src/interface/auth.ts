import { AccountResultProps } from './account';

export interface AuthResultProps {
    status: string;
    message: string;
    token: string;
    cuentas: AccountResultProps[];
}
