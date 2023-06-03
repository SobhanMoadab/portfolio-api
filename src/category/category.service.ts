import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}
  async exists(where: Prisma.CategoryWhereUniqueInput) {
    return this.prisma.category.findFirst({ where });
  }
  async createCategory(dto: Prisma.CategoryCreateInput) {
    const IsExist = await this.exists(dto);
    if (IsExist) throw new BadRequestException('Name already exists');
    await this.prisma.category.create({ data: dto });
  }

  async deleteCategory(where: Prisma.CategoryWhereUniqueInput) {
    await this.prisma.category.delete({ where });
  }

  async getCategories() {
    return await this.prisma.category.findMany();
  }

  async updateCategory(
    where: Prisma.CategoryWhereUniqueInput,
    data: Prisma.CategoryUpdateInput,
  ) {
    await this.prisma.category.update({
      data,
      where,
    });
  }
}
