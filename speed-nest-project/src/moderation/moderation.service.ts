import { Injectable } from '@nestjs/common';

@Injectable()
export class ModerationService {
  getAllArticles() {
    return [{ id: 1, article: 'moderation article 1' }];
  }
}
