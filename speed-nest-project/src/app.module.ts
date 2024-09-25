import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './api/articles/articles.controller';
import { ModerationController } from './moderation/moderation.controller';
import { ModerationService } from './moderation/moderation.service';
//import { ModerationModule } from './moderation/moderation.module';

@Module({
  imports: [],
  controllers: [AppController, ArticlesController, ModerationController],
  providers: [AppService, ModerationService],
})
export class AppModule {}
