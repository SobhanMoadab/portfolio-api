import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Delete,
  Put,
  Param,
  ParseIntPipe,
  HttpStatus,
} from '@nestjs/common';
import { TagService } from './tag.service';
import { TagDTO } from '../dto/tag.dto';
import { Response } from 'express';

@Controller('dashboard/tags')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async createTag(@Body() tagDTO: TagDTO, @Res() res: Response) {
    await this.tagService.createTag({ name: tagDTO.name });
    return res.status(201).json({ msg: 'success' });
  }

  @Put(':id')
  async updateTag(
    @Body() tagDTO: TagDTO,
    @Param()
    params: { id: string },
    @Res() res: Response,
  ) {
    await this.tagService.updateTag({ id: parseInt(params.id) }, tagDTO);
    return res.status(200).json({ msg: 'success' });
  }

  @Get()
  async getTags(@Res() res: Response) {
    const tags = await this.tagService.getTags();
    return res.status(200).json({ msg: 'success', data: tags });
  }

  @Delete()
  async deleteTag(@Body() tagDTO: TagDTO, @Res() res: Response) {
    await this.tagService.deleteTag({ name: tagDTO.name });
    return res.status(204).json({ msg: 'success' });
  }
}
