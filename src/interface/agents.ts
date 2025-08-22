export interface AgentProps {
    id: number;
    nombre: string;
    email: string;
    direccion: string;
    telefono: string;
    idciudad: string;
}

export interface AgentsResultProps {
    status: string;
    message: string;
    agentes: AgentProps[];
}
