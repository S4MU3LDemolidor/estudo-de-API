import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ClasseService {
  constructor(private prisma: PrismaService) {}

  create(data: { nome: string; descricao: string }) {
    return this.prisma.classeDeAula.create({ data });
  }

  findAll() {
    return this.prisma.classeDeAula.findMany();
  }
}
