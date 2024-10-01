import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ArticlesController } from './api/articles/articles.controller';
import { ModerationController } from './moderation/moderation.controller';
import { ModerationService } from './moderation/moderation.service';
import { MongooseModule } from '@nestjs/mongoose';

const DB_URI =
'mongodb+srv://roccomilicic2:ZPFt0VdXL0FnNmRQ@clusterspeed.y8tg4.mongodb.net/?retryWrites=true&w=majority&appName=ClusterSPEED';

@Module({
  imports: [MongooseModule.forRoot(DB_URI)],
  controllers: [AppController, ArticlesController, ModerationController],
  providers: [AppService, ModerationService],
})
export class AppModule {}
