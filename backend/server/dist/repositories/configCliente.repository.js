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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigClienteRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let ConfigClienteRepository = class ConfigClienteRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getCliente() {
        return await this.prisma.configuracaoCliente.findFirstOrThrow();
    }
    async getByIdCliente(id) {
        return await this.prisma.configuracaoCliente.findFirst({
            where: {
                id: id,
            },
        });
    }
    async getByCnpjEmailCliente(cnpj_cpf, email) {
        return await this.prisma.configuracaoCliente.findFirst({
            where: {
                AND: [
                    {
                        cnpj_cpf: cnpj_cpf
                    },
                    {
                        email: email
                    }
                ]
            },
        });
    }
    async getByCnpjCliente(cnpj_cpf) {
        return await this.prisma.configuracaoCliente.findFirst({
            where: {
                cnpj_cpf: cnpj_cpf,
            },
        });
    }
    async createCliente(data) {
        return await this.prisma.configuracaoCliente.create({
            data: data,
        });
    }
    async updateCliente(id, data) {
        return await this.prisma.configuracaoCliente.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteCliente(id) {
        return await this.prisma.configuracaoCliente.delete({
            where: {
                id: id,
            },
        });
    }
};
ConfigClienteRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], ConfigClienteRepository);
exports.ConfigClienteRepository = ConfigClienteRepository;
//# sourceMappingURL=configCliente.repository.js.map