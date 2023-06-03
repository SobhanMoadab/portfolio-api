import { Controller, Get, Post, Body, Res, Delete, Put } from '@nestjs/common';
import { TagService } from './tagService';
import { TagDTO } from './dto/tag.dto';
import { Response } from 'express';
import { Prisma } from '@prisma/client';

@Controller('dashboard')
export class AppController {
  constructor(private readonly tagService: TagService) { }

  @Post('tags')
  async createTag(@Body() tagDTO: TagDTO, @Res() res: Response) {
    await this.tagService.createTag({ name: tagDTO.name });
    return res.status(201).json({ msg: 'success' });
  }

  @Put('tags')
  async updateTag(@Body() tagDTO: TagDTO, @Res() res: Response) {
    await this.tagService.createTag({ name: tagDTO.name });
    return res.status(200).json({ msg: 'success' });
  }

  @Get('tags')
  async getTags(@Body() tagDTO: TagDTO, @Res() res: Response) {
    const tags = await this.tagService.createTag({ name: tagDTO.name });
    return res.status(200).json({ msg: 'success', data: tags });
  }

  @Delete('tags')
  async deleteTag(@Body() tagDTO: TagDTO, @Res() res: Response) {
    await this.tagService.createTag({ name: tagDTO.name });
    return res.status(204).json({ msg: 'success' });
  }
}
