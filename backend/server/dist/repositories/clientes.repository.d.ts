import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ClientesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getByIdName(name: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    countClientesByEmpresa(empresa_configId: any): Promise<number>;
    getByIdCPF(cpf: any, empresa_configId: any): Promise<{
        id: number;
        nome: string;
        cpf: string;
    }>;
    getClientesAll(empresa_configId: any): Promise<({
        sexo: {
            id: number;
            descricao: string;
            created_at: Date;
            updated_at: Date;
        };
        historico_cliente: {
            created_at: Date;
            valor: string;
            operador: string;
        }[];
    } & {
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    })[]>;
    getByIdClientes(id: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    }>;
    createClientes(data: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    }>;
    updateClientes(id: any, data: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteClientes(id: any): Promise<{
        id: number;
        nome: string;
        sobrenome: string;
        email: string;
        empresa: string;
        data_nascimento: Date;
        cpf: string;
        cnpj: string;
        rg: string;
        telefone: string;
        responsavel: string;
        linkFoto: string;
        sexoId: number;
        planoId: number;
        empresa_configId: number;
        cep: string;
        logradouro: string;
        bairro: string;
        estado: string;
        cidade: string;
        pais: string;
        complemento: string;
        numero: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
