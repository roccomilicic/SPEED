import {
    Body,
    Controller,
    Delete,
    Get,
    HttpException,
    HttpStatus,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
  import { ArticleService } from './article.service';
  import { CreateArticleDto } from './dto/create-article.dto';
  
  @Controller('api/articles')
  export class ArticleController {
    constructor(private readonly articleService: ArticleService) {}
  
    @Get('/test')
    test() {
      return this.articleService.test();
    }
  
    @Get()
    async findAll() {
      return await this.articleService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string) {
      const article = await this.articleService.findOne(id);
      if (!article) {
        throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
      }
      return article;
    }
  
    @Post()
    async create(@Body() createArticleDto: CreateArticleDto) {
      return await this.articleService.create(createArticleDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() createArticleDto: CreateArticleDto) {
      const updatedArticle = await this.articleService.update(id, createArticleDto);
      if (!updatedArticle) {
        throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
      }
      return updatedArticle;
    }
    
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      const deletedArticle = await this.articleService.delete(id);
      if (!deletedArticle) {
        throw new HttpException('Article not found', HttpStatus.NOT_FOUND);
      }
      return deletedArticle;
    }
  }
  