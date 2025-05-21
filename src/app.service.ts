import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Mindo!';
  }
  getAlunos(): Array<any> {
    return [
      { id: 1, nome: 'Lucas' },
      { id: 2, nome: 'João' },
      { id: 3, nome: 'Maria' },
    ];
  }
}
