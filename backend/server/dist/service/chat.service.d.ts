import { ChatRepository } from 'src/repositories/chat.repository';
import { ChatInfoRepository } from 'src/repositories/chat-info.repository';
import { MessagesRepository } from 'src/repositories/messagen.repository';
export declare class ChatService {
    private messagesRepository;
    private chatRepository;
    private chatInfoRepository;
    constructor(messagesRepository: MessagesRepository, chatRepository: ChatRepository, chatInfoRepository: ChatInfoRepository);
    getChatInfoByUuid(uuid: any): Promise<{
        chat_info_id: number;
        uuid: string;
        type: string;
        key_chatgpt: string;
        organization_chatgpt: string;
        key_facebook: string;
        key_instagram: string;
        token_whatsapp: string;
        app_secret_whatsapp: string;
        wa_id_numero_telefone: string;
        msg_inicial: string;
        modelo_ai: string;
        fluxo: import(".prisma/client").Prisma.JsonValue;
        bot_ativo: boolean;
        chat_gpt_bot_ativo: boolean;
        atendimento_manual: boolean;
        foto_bot_ativo: boolean;
        foto_usuario_ativo: boolean;
        bot_nome: string;
        bot_foto: string;
        foto_fundo: string;
        usario_foto: string;
        cor_fundo: string;
        cor_conversa_user: string;
        cor_conversa_atend: string;
        cor_texto_user: string;
        cor_texto_atend: string;
        cor_botao_enviar: string;
        texto_input: string;
        tamanho_font_mgm: number;
        tamanho_avatar_usuario: number;
        cliente_id: number;
        anexo_documento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    updatechatInfo(data: any): Promise<{
        chat_info_id: number;
        uuid: string;
        type: string;
        key_chatgpt: string;
        organization_chatgpt: string;
        key_facebook: string;
        key_instagram: string;
        token_whatsapp: string;
        app_secret_whatsapp: string;
        wa_id_numero_telefone: string;
        msg_inicial: string;
        modelo_ai: string;
        fluxo: import(".prisma/client").Prisma.JsonValue;
        bot_ativo: boolean;
        chat_gpt_bot_ativo: boolean;
        atendimento_manual: boolean;
        foto_bot_ativo: boolean;
        foto_usuario_ativo: boolean;
        bot_nome: string;
        bot_foto: string;
        foto_fundo: string;
        usario_foto: string;
        cor_fundo: string;
        cor_conversa_user: string;
        cor_conversa_atend: string;
        cor_texto_user: string;
        cor_texto_atend: string;
        cor_botao_enviar: string;
        texto_input: string;
        tamanho_font_mgm: number;
        tamanho_avatar_usuario: number;
        cliente_id: number;
        anexo_documento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    getAllChatInfo(clienteId: any): Promise<any>;
    getByIdchatInfo(clienteId: any): Promise<any>;
    createchatInfo(data: any): Promise<{
        chat_info_id: number;
        uuid: string;
        type: string;
        key_chatgpt: string;
        organization_chatgpt: string;
        key_facebook: string;
        key_instagram: string;
        token_whatsapp: string;
        app_secret_whatsapp: string;
        wa_id_numero_telefone: string;
        msg_inicial: string;
        modelo_ai: string;
        fluxo: import(".prisma/client").Prisma.JsonValue;
        bot_ativo: boolean;
        chat_gpt_bot_ativo: boolean;
        atendimento_manual: boolean;
        foto_bot_ativo: boolean;
        foto_usuario_ativo: boolean;
        bot_nome: string;
        bot_foto: string;
        foto_fundo: string;
        usario_foto: string;
        cor_fundo: string;
        cor_conversa_user: string;
        cor_conversa_atend: string;
        cor_texto_user: string;
        cor_texto_atend: string;
        cor_botao_enviar: string;
        texto_input: string;
        tamanho_font_mgm: number;
        tamanho_avatar_usuario: number;
        cliente_id: number;
        anexo_documento: boolean;
        created_at: Date;
        updated_at: Date;
    } | {
        msg: string;
    }>;
    deletechatInfo(data: any): Promise<{
        chat_info_id: number;
        uuid: string;
        type: string;
        key_chatgpt: string;
        organization_chatgpt: string;
        key_facebook: string;
        key_instagram: string;
        token_whatsapp: string;
        app_secret_whatsapp: string;
        wa_id_numero_telefone: string;
        msg_inicial: string;
        modelo_ai: string;
        fluxo: import(".prisma/client").Prisma.JsonValue;
        bot_ativo: boolean;
        chat_gpt_bot_ativo: boolean;
        atendimento_manual: boolean;
        foto_bot_ativo: boolean;
        foto_usuario_ativo: boolean;
        bot_nome: string;
        bot_foto: string;
        foto_fundo: string;
        usario_foto: string;
        cor_fundo: string;
        cor_conversa_user: string;
        cor_conversa_atend: string;
        cor_texto_user: string;
        cor_texto_atend: string;
        cor_botao_enviar: string;
        texto_input: string;
        tamanho_font_mgm: number;
        tamanho_avatar_usuario: number;
        cliente_id: number;
        anexo_documento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    getChatInfoByUuidCliente(uuid: any): Promise<{
        chat_info_id: number;
        uuid: string;
        type: string;
        key_chatgpt: string;
        organization_chatgpt: string;
        key_facebook: string;
        key_instagram: string;
        token_whatsapp: string;
        app_secret_whatsapp: string;
        wa_id_numero_telefone: string;
        msg_inicial: string;
        modelo_ai: string;
        fluxo: import(".prisma/client").Prisma.JsonValue;
        bot_ativo: boolean;
        chat_gpt_bot_ativo: boolean;
        atendimento_manual: boolean;
        foto_bot_ativo: boolean;
        foto_usuario_ativo: boolean;
        bot_nome: string;
        bot_foto: string;
        foto_fundo: string;
        usario_foto: string;
        cor_fundo: string;
        cor_conversa_user: string;
        cor_conversa_atend: string;
        cor_texto_user: string;
        cor_texto_atend: string;
        cor_botao_enviar: string;
        texto_input: string;
        tamanho_font_mgm: number;
        tamanho_avatar_usuario: number;
        cliente_id: number;
        anexo_documento: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
    getAllChatMsgm(chatId: any): Promise<{
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
    }[]>;
    getByChatUuidMessages(uuid: any): Promise<{
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
    }[]>;
    getByChatUuidMessagesLast(uuid: any): Promise<{
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
    }[]>;
    createMessages(data: any): Promise<{
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
    }>;
    getChaByUuid(uuid: any): Promise<{
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
    atualizarChat(data: any): Promise<{
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
    getMessages(data: any): Promise<void>;
    novoChat(data: any): Promise<{
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
    deleteChat(data: any): Promise<{
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
    deleteToken(data: any): Promise<any>;
}
