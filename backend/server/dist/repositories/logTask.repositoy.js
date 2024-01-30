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
exports.LogTasksRepository = void 0;
const PrismaService_1 = require("../base/relacional/PrismaService");
const common_1 = require("@nestjs/common");
let LogTasksRepository = class LogTasksRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getLogTasksAll(taskId) {
        return await this.prisma.log_taks.findMany({
            where: {
                taskId: taskId,
            },
        });
    }
    async getByIdLogTasks(id) {
        return await this.prisma.log_taks.findFirst({
            where: {
                id: id,
            },
        });
    }
    async createLogTasks(data) {
        return await this.prisma.log_taks.create({
            data: data,
        });
    }
    async updateLogTasks(id, data) {
        return await this.prisma.log_taks.update({
            where: {
                id: id,
            },
            data: data,
        });
    }
    async deleteLogTasks(id) {
        return await this.prisma.log_taks.delete({
            where: {
                id: id,
            },
        });
    }
    async createManyLogTasks(data) {
        return await this.prisma.log_taks.createMany({
            data: data,
        });
    }
    async deleteManyTaskSubSub(id) {
        return await this.prisma.log_taks.deleteMany({
            where: {
                id: id,
            },
        });
    }
};
LogTasksRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], LogTasksRepository);
exports.LogTasksRepository = LogTasksRepository;
//# sourceMappingURL=logTask.repositoy.js.map