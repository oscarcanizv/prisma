import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service.js';

@Injectable()
export class AppService {
  constructor(private readonly prisma: PrismaService) {}

  async getHello() {
    const productos = await this.prisma.producto.count();

    return {
      mensaje: 'NestJS y Prisma funcionando',
      totalProductos: productos,
    };
  }
}
