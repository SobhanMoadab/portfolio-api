import { Module } from '@nestjs/common';
import { TagController } from './tag/tag.controller';
import { TagService } from './tag/tag.service';

import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prismaService';
import { CategoryController } from './category/category.controller';
import { CategoryService } from './category/category.service';
@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TagController, CategoryController],
  providers: [TagService, PrismaService, CategoryService],
})
export class AppModule {}
