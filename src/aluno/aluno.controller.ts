import { Controller, Post, Body, Get } from '@nestjs/common';
import { AlunoService } from './aluno.service';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}

  @Post()
  create(
    @Body() data: { nome: string; email: string; classeDeAulaId: number },
  ) {
    return this.alunoService.create(data);
  }

  @Get()
  findAll() {
    return this.alunoService.findAll();
  }
}
