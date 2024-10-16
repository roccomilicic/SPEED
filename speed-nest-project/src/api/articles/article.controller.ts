import { Controller, Put, Param, HttpException, HttpStatus, Get, Post, Body } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';

@Controller('api/articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get('/pending')
  async getPendingArticles() {
    return this.articleService.findAllPending();
  }

  @Get('/approved')
  async getApprovedArticles() {
    return this.articleService.findAllApproved();
  }

  @Get('/rejected')
  async getRejectedArticles() {
    return this.articleService.findAllRejected();
  }

  @Post()
  async createArticle(@Body() createArticleDto: CreateArticleDto) {
    return await this.articleService.create(createArticleDto);
  }

  @Put(':id/approve')
  async approveArticle(@Param('id') articleId: string) {
    try {
      console.log('Approving article:', articleId); // Log the articleId
      await this.articleService.approveArticle(articleId);
      return { message: 'Article approved and moved to approved collection' };
    } catch (error) {
      console.error('Error approving article:', error); // Log the error
      throw new HttpException('Article not found or approval failed', HttpStatus.BAD_REQUEST);
    }
  }
  
  @Put(':id/reject')
  async rejectArticle(@Param('id') articleId: string) {
    try {
      console.log('Rejecting article:', articleId); // Log the articleId
      await this.articleService.rejectArticle(articleId);
      return { message: 'Article rejected and moved to rejected collection' };
    } catch (error) {
      console.error('Error rejecting article:', error); // Log the error
      throw new HttpException('Article not found or rejection failed', HttpStatus.BAD_REQUEST);
    }
  }
  

}
