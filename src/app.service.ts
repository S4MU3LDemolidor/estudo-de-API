import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  getHello(): string {
    return 'Hello Mindo!';
  }

  async getAlunos() {
    return this.prisma.aluno.findMany({
      include: { classeDeAula: true },
    });
  }
}
