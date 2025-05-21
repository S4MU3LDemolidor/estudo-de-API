import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(`/alunos`)
  getHello2(): Array<any> {
    return this.appService.getAlunos();
  }

  @Get(`/aluno`)
  getHello3(): Array<any> {
    return this.appService.getAlunos();
  }
}
