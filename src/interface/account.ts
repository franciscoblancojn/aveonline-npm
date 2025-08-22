export interface AccountUserResultProps {
    id: number;
    documento: string;
    usuario: string;
    nombre: string;
    razon: string;
    asesorlogistico: string;
    nombreasesor: string;
}

export interface AccountResultProps {
    servicio: string;
    usuarios: AccountUserResultProps[];
}
