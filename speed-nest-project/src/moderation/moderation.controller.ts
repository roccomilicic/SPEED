import { Controller, Get} from '@nestjs/common';
import { ModerationService } from './moderation.service';

@Controller('moderation')
export class ModerationController {
  constructor(private readonly moderationService: ModerationService) {}

  // Example: Get all reports
  @Get('reports')
  getAllReports() {
    return this.moderationService.getAllArticles();
  }
}