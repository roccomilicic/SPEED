import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleController } from './article.controller';
import { ArticleService } from './article.service';
import { PendingArticle, PendingArticleSchema } from './pending-article.schema';
import { ApprovedArticle, ApprovedArticleSchema } from './approved-article.schema';
import { RejectedArticle, RejectedArticleSchema } from './rejected-article.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PendingArticle.name, schema: PendingArticleSchema },
      { name: ApprovedArticle.name, schema: ApprovedArticleSchema },
      { name: RejectedArticle.name, schema: RejectedArticleSchema },
    ]),
  ],
  controllers: [ArticleController],
  providers: [ArticleService],
})
export class ArticleModule {}
