import { PrismaService } from 'src/base/relacional/PrismaService';
export declare class ChatRepository {
    private prisma;
    constructor(prisma: PrismaService);
    getChatByTelefoneByUuidInfoChat(chat_telefone: any, uuid_chat_info: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }[]>;
    getChatAll(clienteId: any): Promise<({
        chat_info: {
            uuid: string;
        };
    } & {
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    })[]>;
    getChatTelefone(telefone: any): Promise<{
        chat_info: {
            uuid: string;
        };
        messages: {
            message_id: number;
            avatar: string;
            username: string;
            text: string;
            type: string;
            whatsapp_id: string;
            chat_id: number;
            to_telefone: string;
            created_at: Date;
            updated_at: Date;
        }[];
    } & {
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    getAllChatClose(clienteId: any): Promise<({
        chat_info: {
            uuid: string;
            type: string;
        };
    } & {
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    })[]>;
    getAllChatOpen(clienteId: any): Promise<({
        chat_info: {
            uuid: string;
            type: string;
        };
    } & {
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    })[]>;
    getByUiidChat(uuid: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    getByIdChat(id: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    createChat(data: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    updateChat(id: any, data: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    deleteChat(id: any): Promise<{
        chat_id: number;
        uuid: string;
        nome: string;
        telefone: string;
        email: string;
        chat_info_id: number;
        cliente_id: number;
        created_at: Date;
        updated_at: Date;
        chat_open: boolean;
        data_close: Date;
        nome_usuario_close: string;
        chat_app: string;
        taskId: number;
    }>;
    deleteChatChatInfo(id: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
}
