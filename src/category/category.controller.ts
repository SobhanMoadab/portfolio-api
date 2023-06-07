import {
  Controller,
  Get,
  Post,
  Body,
  Res,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { CategoryDTO } from '../dto/category.dto';
import { Response } from 'express';
import { CategoryService } from './category.service';

@Controller('dashboard/categorys')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() categoryDTO: CategoryDTO, @Res() res: Response) {
    await this.categoryService.createCategory({ name: categoryDTO.name });
    return res.status(201).json({ msg: 'success' });
  }

  @Put('id')
  async updateCategory(
    @Body() categoryDTO: CategoryDTO,
    @Param() params: { id: number },
    @Res() res: Response,
  ) {
    await this.categoryService.updateCategory({ id: params.id }, categoryDTO);
    return res.status(200).json({ msg: 'success' });
  }

  @Get()
  async getCategories(@Res() res: Response) {
    const categories = await this.categoryService.getCategories();
    return res.status(200).json({ msg: 'success', data: categories });
  }

  @Delete()
  async deleteCategory(@Body() categoryDTO: CategoryDTO, @Res() res: Response) {
    await this.categoryService.createCategory({ name: categoryDTO.name });
    return res.status(204).json({ msg: 'success' });
  }
}
