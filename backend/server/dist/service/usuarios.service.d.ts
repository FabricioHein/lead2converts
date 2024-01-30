import { ModulosPermissaoRepository } from 'src/repositories/modulos-permissao.repository';
import { SubModulosPermissaoRepository } from 'src/repositories/sub-modulos-permissao.repository';
import { UsuarioRepository } from 'src/repositories/usuario.repository';
import { FirebaseService } from './firebase.service';
import { ConfigClienteRepository } from 'src/repositories/configCliente.repository';
import { SubModulosRepository } from 'src/repositories/sub-modulos.repository';
import { ModulosRepository } from 'src/repositories/modulos.repository';
export declare class UsuariosService {
    private usuarioRepositorio;
    private modulosPermissaoRepository;
    private subModulosPermissaoRepository;
    private firebaseService;
    private configClienteRepository;
    private subModulosRepository;
    private modulosRepository;
    constructor(usuarioRepositorio: UsuarioRepository, modulosPermissaoRepository: ModulosPermissaoRepository, subModulosPermissaoRepository: SubModulosPermissaoRepository, firebaseService: FirebaseService, configClienteRepository: ConfigClienteRepository, subModulosRepository: SubModulosRepository, modulosRepository: ModulosRepository);
    novaSenhaUsuarioEmail(email: any): Promise<any>;
    createUsuarioCliente(data: any): Promise<never>;
    atualizarUsuario(data: any): Promise<{
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
    }>;
    getAllUsuario(id: any): Promise<({
        permissao_modulos: ({
            modulo: {
                subModulo: {
                    permissao_sub_modulos: {
                        ver: boolean;
                        editar: boolean;
                        deletar: boolean;
                    }[];
                    id: number;
                }[];
            } & {
                id: number;
                nome: string;
                url: string;
                ativo: boolean;
                ordem: number;
                icon: string;
                created_at: Date;
                updated_at: Date;
            };
        } & {
            id: number;
            ver: boolean;
            created_at: Date;
            updated_at: Date;
            userId: number;
            moduloId: number;
        })[];
    } & {
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
    })[]>;
    createUsuario(data: any): Promise<never>;
    permissaoAdmin(data: any): Promise<{
        msg: string;
        error: boolean;
    }>;
    deleteUsuario(data: any): Promise<{
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
    }>;
    salvarFotoPerfil(data: any): Promise<never>;
    atualizarPermissoesModulos(data: any): Promise<import(".prisma/client").Prisma.BatchPayload | {
        msg: string;
        error: boolean;
    }>;
}
