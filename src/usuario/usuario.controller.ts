import { Body, Controller, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {
  constructor(private repo: UsuarioRepository) {}

  @Post()
  async create(@Body() user: Usuario) {
    const newUser = await this.repo.create(user);
    return newUser;
  }
}
