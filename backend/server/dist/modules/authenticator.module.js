"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticatorModule = void 0;
const common_1 = require("@nestjs/common");
const authenticator_service_1 = require("../service/authenticator.service");
const authenticator_controller_1 = require("../controllers/authenticator.controller");
const usuarios_service_1 = require("../service/usuarios.service");
const usuario_repository_1 = require("../repositories/usuario.repository");
const modulos_permissao_repository_1 = require("../repositories/modulos-permissao.repository");
const sub_modulos_permissao_repository_1 = require("../repositories/sub-modulos-permissao.repository");
const firebase_service_1 = require("../service/firebase.service");
const configCliente_repository_1 = require("../repositories/configCliente.repository");
const sub_modulos_repository_1 = require("../repositories/sub-modulos.repository");
const modulos_repository_1 = require("../repositories/modulos.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const sendgrid_service_1 = require("../mail/sendgrid/sendgrid.service");
let AuthenticatorModule = class AuthenticatorModule {
};
AuthenticatorModule = __decorate([
    (0, common_1.Module)({
        controllers: [authenticator_controller_1.AuthenticatorController],
        providers: [
            sendgrid_service_1.SendgridService,
            authenticator_service_1.AuthenticatorService,
            usuarios_service_1.UsuariosService,
            usuario_repository_1.UsuarioRepository,
            modulos_permissao_repository_1.ModulosPermissaoRepository,
            sub_modulos_permissao_repository_1.SubModulosPermissaoRepository,
            firebase_service_1.FirebaseService,
            configCliente_repository_1.ConfigClienteRepository,
            sub_modulos_repository_1.SubModulosRepository,
            modulos_repository_1.ModulosRepository,
            PrismaService_1.PrismaService,
        ],
    })
], AuthenticatorModule);
exports.AuthenticatorModule = AuthenticatorModule;
//# sourceMappingURL=authenticator.module.js.map