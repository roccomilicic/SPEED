import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    getPendingArticles(): Promise<import("./pending-article.schema").PendingArticle[]>;
    getApprovedArticles(): Promise<import("./approved-article.schema").ApprovedArticle[]>;
    getRejectedArticles(): Promise<import("./rejected-article.schema").RejectedArticle[]>;
    createArticle(createArticleDto: CreateArticleDto): Promise<import("./pending-article.schema").PendingArticle>;
    approveArticle(articleId: string): Promise<{
        message: string;
    }>;
    rejectArticle(articleId: string): Promise<{
        message: string;
    }>;
}
