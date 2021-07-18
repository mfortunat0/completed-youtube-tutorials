import { Controller, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from 'src/category.entity';
import { Repository } from 'typeorm';

@Controller('categories')
export class CategoryController {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  @Get()
  async index() {
    return this.categoryRepo.find();
  }

  @Post()
  async category_create() {
    const category = this.categoryRepo.create({
      name: 'teste',
    });
    return await this.categoryRepo.save(category);
  }
}
