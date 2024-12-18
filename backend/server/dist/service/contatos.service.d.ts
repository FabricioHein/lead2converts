import { ContatosRepository } from 'src/repositories/contatos.repository';
export declare class ContatosService {
    private contatosRepositorio;
    constructor(contatosRepositorio: ContatosRepository);
    atualizarContatos(data: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }>;
    getByIdContatosChat(id: any): Promise<{
        number: string;
        id: number;
        email: string;
        name: string;
        profilePicUrl: string;
    }>;
    getByIdNumber(number: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }[]>;
    getByIdName(name: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }[]>;
    getAllContatos(id: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }[]>;
    createContatos(data: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }>;
    deleteContatos(data: any): Promise<{
        id: number;
        name: string;
        number: string;
        profilePicUrl: string;
        created_at: Date;
        updated_at: Date;
        email: string;
        empresa_configId: number;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        cep: string;
    }>;
}
