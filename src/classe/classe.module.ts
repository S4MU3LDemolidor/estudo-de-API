import { Module } from '@nestjs/common';
import { ClasseController } from './classe.controller';
import { ClasseService } from './classe.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ClasseController],
  providers: [ClasseService],
})
export class ClasseModule {}
