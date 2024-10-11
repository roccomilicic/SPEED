import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './api/articles/articles.controller'; 
// import { ModerationController } from './moderation/moderation.controller';
// import { ModerationService } from './moderation/moderation.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './api/articles/articles.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot("mongodb+srv://rocco:mcY9ItydBZONj0Nu@clusterspeed.y8tg4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSPEED"), 
    ArticleModule,
  ],
  controllers: [
    AppController,
    ArticlesController,
    // ModerationController,
  ],
  providers: [AppService/*, ModerationService*/],
})
export class AppModule {}
