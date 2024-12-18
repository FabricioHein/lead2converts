import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ContatosRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getContatosAll(empresa_configId: any): Promise<{
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
    getByIdContatos(id: any): Promise<{
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
    getByIdContatosChat(id: any): Promise<{
        number: string;
        id: number;
        email: string;
        name: string;
        profilePicUrl: string;
    }>;
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
    updateContatos(id: any, data: any): Promise<{
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
    deleteContatos(id: any): Promise<{
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
