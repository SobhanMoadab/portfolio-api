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

@Controller('dashboard/categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async createCategory(@Body() categoryDTO: CategoryDTO, @Res() res: Response) {
    await this.categoryService.createCategory({ name: categoryDTO.name });
    return res.status(201).json({ msg: 'success' });
  }

  @Put(':id')
  async updateCategory(
    @Body() categoryDTO: CategoryDTO,
    @Param() params: { id: string },
    @Res() res: Response,
  ) {
    const result = await this.categoryService.updateCategory(
      { id: parseInt(params.id) },
      categoryDTO,
    );
    return res.status(200).json({ msg: 'success', data: result });
  }

  @Get()
  async getCategories(@Res() res: Response) {
    const categories = await this.categoryService.getCategories();
    return res.status(200).json({ msg: 'success', data: categories });
  }

  @Delete(':id')
  async deleteCategory(
    @Param()
    params: { id: string },
    @Res() res: Response,
  ) {
    await this.categoryService.deleteCategory({ id: parseInt(params.id) });
    return res.status(204).json({ msg: 'success' });
  }
}
