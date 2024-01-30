import { PrismaService } from 'src/base/relacional/PrismaService';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutoRepository {
  constructor(private prisma: PrismaService) {}
  async getProdutoAll(clienteId) {
    return await this.prisma.produto.findMany({
      where: {
        clienteId: clienteId,
      },
    });
  }
  async getByIdProduto(id) {
    return await this.prisma.produto.findFirst({
      where: {
        id: id,
      },
    });
  }
  async createProduto(data) {
    return await this.prisma.produto.create({
      data: data,
    });
  }

  async updateProduto(id, data) {
    return await this.prisma.produto.update({
      where: {
        id: id,
      },
      data: data,
    });
  }

  async deleteProduto(id) {
    return await this.prisma.produto.delete({
      where: {
        id: id,
      },
    });
  }
}
