import { Controller, Post, Body } from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('articles')
export class ArticlesController {
  @Post()
  createArticle(@Body() createArticleDto: CreateArticleDto) {
    // Handle article submission
    return { message: 'Article submitted successfully', data: createArticleDto };
  }
}
