import { TaskRepository } from 'src/repositories/task.repository';
import { TaskSubRepository } from 'src/repositories/tasksub.repository';
import { AnotacaoRepository } from 'src/repositories/anotacoes.repository';
import { ArquivosRepository } from 'src/repositories/arquivos.repository';
import { VendaRepository } from 'src/repositories/venda.repository';
import { MotivosRepository } from 'src/repositories/motivos.repository';
import { LogTasksRepository } from 'src/repositories/logTask.repositoy';
export declare class TaskService {
    private anotacaoRepository;
    private taskRepositorio;
    private taskSubRepository;
    private arquivosRepository;
    private vendaRepository;
    private motivosRepository;
    private logTasksRepository;
    constructor(anotacaoRepository: AnotacaoRepository, taskRepositorio: TaskRepository, taskSubRepository: TaskSubRepository, arquivosRepository: ArquivosRepository, vendaRepository: VendaRepository, motivosRepository: MotivosRepository, logTasksRepository: LogTasksRepository);
    historicoTask(data: any): Promise<{
        id: number;
        chave: string;
        valor: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getByIdMotivos(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }[]>;
    getAllMotivos(id: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }[]>;
    createMotivos(data: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteMotivos(data: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    atualizarMotivos(data: any): Promise<{
        id: number;
        descricao: string;
        configuracaoClienteId: number;
        codigo: string;
        nome: string;
        created_at: Date;
        updated_at: Date;
    }>;
    atualizarTask(data: any): Promise<{
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }>;
    atualizarAnotacao(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    atualizarTaskSub(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        description_text: string;
        priority: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getByIdTask(id: any): Promise<{
        processo: {
            projeto: {
                id: number;
                title: string;
                created_at: Date;
                updated_at: Date;
                tipo_projetoId: number;
                operador: string;
                configuracaoClienteId: number;
            };
            title: string;
        };
        email: {
            id: number;
            titulo: string;
            from: string;
            to: string;
            html_body: string;
            data_envio: Date;
            taskId: number;
            campanha_mktId: number;
        }[];
        arquivos: {
            id: number;
            link: string;
            description: string;
            created_at: Date;
            updated_at: Date;
            taskId: number;
            clienteId: number;
            chatChat_id: number;
            messagesMessage_id: number;
        }[];
        anotacoes: {
            id: number;
            title: string;
            description: string;
            date: Date;
            is_fav: boolean;
            tag: string;
            created_at: Date;
            updated_at: Date;
            taskId: number;
        }[];
        sub_task: {
            id: number;
            title: string;
            description: string;
            description_text: string;
            priority: string;
            status: string;
            date_start: Date;
            date_end: Date;
            created_at: Date;
            updated_at: Date;
            taskId: number;
        }[];
        venda: {
            id: number;
            valor_total: import("@prisma/client/runtime/library").Decimal;
            status: string;
            configuracaoClienteId: number;
            taskId: number;
            usersId: number;
            created_at: Date;
            updated_at: Date;
        };
        Users: {
            id: number;
            sobrenome: string;
            empresa: string;
            cpf: string;
            telefone: string;
            linkFoto: string;
            isAdmin: boolean;
            themeDark: boolean;
            operador: string;
            sexoId: number;
            clienteId: number;
            nome: string;
            email: string;
            profile: string;
            created_at: Date;
            updated_at: Date;
            timesId: number;
            cep: string;
            logradouro: string;
            bairro: string;
            estado: string;
            cidade: string;
            pais: string;
            complemento: string;
            numero: string;
            primeiro_acesso: boolean;
            gerente_conta: boolean;
            termos: boolean;
            password: string;
        };
        Contacts: {
            id: number;
            name: string;
            number: string;
            profilePicUrl: string;
            created_at: Date;
            updated_at: Date;
            email: string;
            configuracaoClienteId: number;
            logradouro: string;
            bairro: string;
            estado: string;
            cidade: string;
            pais: string;
            complemento: string;
            numero: string;
            cep: string;
        };
    } & {
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }>;
    getAllTask(): Promise<{
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }[]>;
    createTask(data: any): Promise<{
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }>;
    getTaskAnexos(data: any): Promise<{
        id: number;
        link: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
        clienteId: number;
        chatChat_id: number;
        messagesMessage_id: number;
    }>;
    deleteTask(data: any): Promise<{
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }>;
    deleteTaskAnexos(data: any): Promise<{
        id: number;
        link: string;
        description: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
        clienteId: number;
        chatChat_id: number;
        messagesMessage_id: number;
    }>;
    deleteTaskSub(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        description_text: string;
        priority: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getAllTaskSubtask(taskId: any): Promise<{
        id: number;
        title: string;
        description: string;
        priority: string;
        description_text: string;
        status: string;
        taskId: number;
        date_end: any;
        date_start: any;
    }[]>;
    createTaskSub(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        description_text: string;
        priority: string;
        status: string;
        date_start: Date;
        date_end: Date;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getAnotacaoAllId(id: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }[]>;
    createVenda(data: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        configuracaoClienteId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    atualizaVendas(data: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        configuracaoClienteId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteVendas(data: any): Promise<{
        id: number;
        valor_total: import("@prisma/client/runtime/library").Decimal;
        status: string;
        configuracaoClienteId: number;
        taskId: number;
        usersId: number;
        created_at: Date;
        updated_at: Date;
    }>;
    deleteAnotacao(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getAllAnotacao(taskId: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }[]>;
    createAnotacao(data: any): Promise<{
        id: number;
        title: string;
        description: string;
        date: Date;
        is_fav: boolean;
        tag: string;
        created_at: Date;
        updated_at: Date;
        taskId: number;
    }>;
    getVisaoGeralTaskSub(data: any, clientId: any): Promise<{
        date_end: any;
        date_start: any;
        status: string;
        title: string;
        priority: string;
        id: number;
        name: string;
        taskId: number;
    }[]>;
    getVisaoGeralTask(data: any, clientId: any): Promise<{
        id: number;
        contato_nome: string;
        contato_numero: string;
        title: string;
        description: string;
        processoId: number;
        valor_Inicial: import("@prisma/client/runtime/library").Decimal;
        valor_Final: import("@prisma/client/runtime/library").Decimal;
        marcar_venda: boolean;
        desconto: import("@prisma/client/runtime/library").Decimal;
        previsao_fechamento: Date;
        status: string;
        emailId: number;
        anotacoesId: number;
        contactsId: number;
        usersId: number;
        operador: string;
        created_at: Date;
        updated_at: Date;
        metasId: number;
        vendaId: number;
        empresa: string;
        motivosId: number;
        produtoId: number;
        arquivado: boolean;
    }[]>;
}
