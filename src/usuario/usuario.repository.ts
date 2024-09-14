import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { Usuario } from './usuario.entity';

@Injectable()
export class UsuarioRepository {
  constructor(private prismaService: PrismaService) {}

  async create(user: Usuario) {
    return this.prismaService.usuario.create({ data: user as any });
  }

  async update(user: Usuario) {
    if(!user.id) throw new Error('Usuário sem ID');
    return this.prismaService.usuario.update({ where: { id: user.id }, data: user as any });
  }

  async findAll() {
    return this.prismaService.usuario.findMany();
  }

  async findOne(id: number) {
    return this.prismaService.usuario.findUnique({ where: { id } });
  }

  async delete(id: number) {
    return this.prismaService.usuario.delete({ where: { id } });
  }
}
