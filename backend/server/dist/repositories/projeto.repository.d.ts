import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ProjetoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getProjetoAll(clienteId: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }[]>;
    getByIdProjeto(id: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }>;
    getByIdProjetoEtapa(id: any): Promise<{
        processo: {
            id: number;
            title: string;
        }[];
    } & {
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }>;
    createProjeto(data: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }>;
    updateProjeto(id: any, data: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }>;
    deleteProjeto(id: any): Promise<{
        id: number;
        title: string;
        created_at: Date;
        updated_at: Date;
        tipo_projetoId: number;
        operador: string;
        configuracaoClienteId: number;
    }>;
    createManyProjeto(data: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    deleteManyProjeto(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
