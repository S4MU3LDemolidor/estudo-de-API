import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('alunos')
  async getAlunos() {
    return await this.appService.getAlunos();
  }
}
