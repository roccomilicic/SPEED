import { ModerationService } from './moderation.service';
export declare class ModerationController {
    private readonly moderationService;
    constructor(moderationService: ModerationService);
    getAllReports(): {
        id: number;
        article: string;
    }[];
}
