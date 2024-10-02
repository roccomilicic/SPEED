import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './api/articles/articles.controller'; 
import { ModerationController } from './moderation/moderation.controller';
import { ModerationService } from './moderation/moderation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './api/articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_URI), 
    ArticleModule,
  ],
  controllers: [
    AppController,
    ArticlesController,
    ModerationController,
  ],
  providers: [AppService, ModerationService],
})
export class AppModule {}
