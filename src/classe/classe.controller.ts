import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClasseService } from './classe.service';

@Controller('classe')
export class ClasseController {
  constructor(private readonly classeService: ClasseService) {}

  @Post()
  create(@Body() data: { nome: string; descricao: string }) {
    return this.classeService.create(data);
  }

  @Get()
  findAll() {
    return this.classeService.findAll();
  }
}
