import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class FormularioDinamicoRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getFormularioDinamicoAll(empresa_configId: any): Promise<({
        form_ask: {
            id: number;
            formulario_dinamicoId: number;
            json: import("@prisma/client/runtime/library").JsonValue;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    })[]>;
    getByURLFormularioDinamico(url_formulario: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    getByURLFormularioDinamicoOpen(url_formulario: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    getByIdFormularioDinamico(id: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    createFormularioDinamico(data: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    updateFormularioDinamico(id: any, data: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
    deleteFormularioDinamico(id: any): Promise<{
        id: number;
        publico: boolean;
        url_formulario: string;
        title: string;
        json: import("@prisma/client/runtime/library").JsonValue;
        created_at: Date;
        updated_at: Date;
        projetoId: number;
        processoId: number;
        empresa_configId: number;
        nome_campanha: string;
        link_redirect: string;
        logo: string;
        logo_width: string;
        logo_height: string;
        taskId: number;
    }>;
}
