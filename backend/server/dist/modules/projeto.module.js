"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjetoModule = void 0;
const common_1 = require("@nestjs/common");
const projeto_service_1 = require("../service/projeto.service");
const projeto_controllers_1 = require("../controllers/projeto.controllers");
const projeto_repository_1 = require("../repositories/projeto.repository");
const PrismaService_1 = require("../base/relacional/PrismaService");
const task_repository_1 = require("../repositories/task.repository");
let ProjetoModule = class ProjetoModule {
};
ProjetoModule = __decorate([
    (0, common_1.Module)({
        controllers: [projeto_controllers_1.ProjetoController],
        providers: [task_repository_1.TaskRepository, projeto_repository_1.ProjetoRepository, projeto_service_1.ProjetoService, PrismaService_1.PrismaService],
    })
], ProjetoModule);
exports.ProjetoModule = ProjetoModule;
//# sourceMappingURL=projeto.module.js.map