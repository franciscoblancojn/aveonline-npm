export interface TransportProps {
    id: number;
    text: string;
}

export interface TransportResultProps {
    status: string;
    message: string;
    transportadoras: TransportProps[];
}
