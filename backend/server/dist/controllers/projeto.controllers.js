"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoController = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("../service/projeto.service");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let ProjetoController = class ProjetoController {
    constructor(projetoService) {
        this.projetoService = projetoService;
    }
    async getAllProjeto(id) {
        try {
            return await this.projetoService.getAllProjeto(id);
        }
        catch (error) {
            return error;
        }
    }
    async getAllProjetoById(id) {
        try {
            return await this.projetoService.getAllProjetoById(id);
        }
        catch (error) {
            return error;
        }
    }
    async deleteProjeto(req) {
        try {
            return await this.projetoService.deleteProjeto(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async createProjeto(req) {
        try {
            return await this.projetoService.createProjeto(req.body);
        }
        catch (error) {
            return error;
        }
    }
    async atualizarProjeto(req) {
        try {
            return await this.projetoService.atualizarProjeto(req.body);
        }
        catch (error) {
            return error;
        }
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('todos/:clienteId'),
    __param(0, (0, common_1.Param)('clienteId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "getAllProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "getAllProjetoById", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('delete'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "deleteProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "createProjeto", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Put)(),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProjetoController.prototype, "atualizarProjeto", null);
ProjetoController = __decorate([
    (0, common_1.Controller)('api/projeto'),
    __metadata("design:paramtypes", [projeto_service_1.ProjetoService])
], ProjetoController);
exports.ProjetoController = ProjetoController;
//# sourceMappingURL=projeto.controllers.js.map