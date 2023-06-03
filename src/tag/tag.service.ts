import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prismaService';
import { Prisma } from '@prisma/client';

@Injectable()
export class TagService {
  constructor(private prisma: PrismaService) { }
  async exists(where: Prisma.TagWhereUniqueInput) {
    return this.prisma.tag.findFirst({ where });
  }
  async createTag(dto: Prisma.TagCreateInput) {
    const IsExist = await this.exists(dto);
    if (IsExist) throw new BadRequestException('Name already exists');
    await this.prisma.tag.create({ data: dto });
  }

  async deleteTag(where: Prisma.TagWhereUniqueInput) {
    await this.prisma.tag.delete({ where });
  }

  async getTags() {
    return await this.prisma.tag.findMany();
  }

  async updateTag(
    where: Prisma.TagWhereUniqueInput,
    data: Prisma.TagUpdateInput,
  ) {
    await this.prisma.tag.update({
      data,
      where,
    });
  }
}
