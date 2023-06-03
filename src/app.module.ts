import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TagService } from './tagService';

import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prismaService';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [TagService, PrismaService],
})
export class AppModule {}
